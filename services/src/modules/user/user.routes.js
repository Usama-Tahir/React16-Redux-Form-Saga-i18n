import express from 'express'
import jwt from 'jsonwebtoken'
import { mongoose } from './../../server/db' // MUST BE HERE !!!!!!!!
import User from './user.model'
import { createToken, createRefreshToken, getToken } from './user.helper'

var env = process.env.NODE_ENV || 'development'
var config = require('./../../server/config')[env]

const router = express.Router()

var jwtSecret = config.jwt.supersecret

/**
 * Get welcome screen from Api
 *
 * @section users
 * @type get
 * @url /users
 */

router.get('/ping', function (req, res) {
  res.send('Welcome to Users Service.')
})

router.get('/refreshToken', (req, res) => {
  // token from request header
  var refreshToken = getToken(req)

  if (refreshToken) {
    // verifies the token
    jwt.verify(refreshToken, jwtSecret, (err, payload) => {
      // 403 is sent if fails
      if (err) {
        if (err.message === 'jwt expired') {
          res.status(403).send({ message: 'Token expired' })
        } else {
          console.log(err)

          res.status(403).send({ message: 'Failed to authenticate token.' })
        }
      } else {

        if (payload.type === 'refresh') {
          // We find user by refreshToken
          User
            .findOne({
              refreshToken: refreshToken
            }, ['password', 'name', 'email', 'username', 'admin'], async function (err, user) {
              if (err) { throw err }

              if (!user) {
                return res.status(401).json({ message: 'Authentication failed.' })
              } else if (user) {
                // Generate token and refresh token!!!!
                user.refreshToken = createRefreshToken()
                user.save((err, result) => {
                  if (err) {
                    res.status(400).send(err)
                  } else {
                    res.json({ message: 'Welcome', token: createToken(result), refreshToken: result.refreshToken, name: result.name })
                  }
                })
              }
            })
        } else {
          res.status(403).send({ message: 'Failed to authenticate token.' })
        }
      }
    })
  } else {
    // No Token
    return res.status(403).send({ message: 'No Token provided' })
  }
})

/**
 * Login a User
 *
 * @section users
 * @type post
 * @url /users/login
 * @param {string} email
 * @param {string} password
 * @return {Object} { success: bool, message: string, token: string }
 */
router.post('/login', function (req, res) {
  User
    .findOne({
      email: req.body.email
    }, ['password', 'name', 'email', 'username', 'admin'], async function (err, user) {
      if (err) { throw err }

      if (!user) {
        res.status(401).json({ field: 'email', message: 'Authentication failed' })
      } else if (user) {
        let comparedPassword = await user.comparePassword(req.body.password)
        if (!comparedPassword) {
          res.status(401).json({ field: 'email', message: 'Authentication failed' })
        } else {
          // We remove some fields from jwt token for security reasons.
          // JWT can be decoded by base64 decode

          user.refreshToken = createRefreshToken({email: req.body.email})
          user.save((err, result) => {
            if (err) {
              res.status(400).send(err)
            } else {
              res.json({ message: 'Welcome', token: createToken(result), refreshToken: result.refreshToken, name: result.name })
            }
          })
        }
      }
    })
})

router.post('/register', function (req, res) {
  User
    .findOne({
      email: req.body.email
    }, 'email', async function (err, emailExists) {
      if (err) { throw err }

      if (emailExists) {
        res.status(409).json({ field: 'email', message: 'email is already taken' })
      } else {
        // We check username if exists
        User.findOne({
          username: req.body.username
        }, 'username', async function (err, usernameExists) {
          if (err) { throw err }
          if (usernameExists) {
            res.status(409).json({ field: 'username', message: 'username is already taken' })
          } else {
            const newUser = Object.assign(new User(), req.body)
            newUser.refreshToken = createRefreshToken()
            newUser.save((err, result) => {
              if (err) {
                res.status(400).send(err)
              } else {
                res.json({ message: 'Welcome', token: createToken(result), refreshToken: result.refreshToken, name: result.name })
              }
            })
          }
        })
      }
    })
})

router.use(function (req, res, next) {
  var token = getToken(req)
  if (token) {
    jwt
      .verify(token, jwtSecret, function (err, decoded) {
        //console.log(decoded)

        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' })
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded
          next()
        }
      })
  } else {
    // if there is no token return an error
    return res
      .status(403)
      .send({ success: false, message: 'No token provided.' })
  }
})

// router.get('/', function (req, res) {
//   User
//     .find({}, function (err, users) {
//       if (!err) {
//         res.json(users)
//       } else {

//       }
//     }).limit(100)
// })

router.get('/', function (req, res) {
  var options = {}
  var query = {}
  var offset = req.query.offset
  if (offset) {
    options.offset = offset
  }
  var limit = req.query.limit
  if (offset) {
    options.limit = limit
  }
  var sortField = req.query.sortField
  var sortDirection = req.query.sortDirection
  if (sortField) {
    options.sort = { [sortField]: (sortDirection || 1) }
  }

  var search = req.query.search

  if (search) {
    query = {
      $or:
      [
        { email: new RegExp( '.*'  + search + '.*' , "i") },
        { name: new RegExp( '.*'  + search + '.*' , "i") },
        { username: new RegExp( '.*'  + search + '.*' , "i") },
      ]
    }
  }

  // Promise fulfilled with object having properties:

  // docs {Array} - Array of documents
  // total {Number} - Total number of documents in collection that match a query
  // limit {Number} - Limit that was used
  // [page] {Number} - Only if specified or default page/offset values were used
  // [pages] {Number} - Only if page specified or default page/offset values were used
  // [offset] {Number} - Only if specified or default page/offset values were used

  User
    .paginate(query, options, (err, result) => {
      res.json(result)
    })
})





router.delete('/user/:id', function (req, res) {
  var id = req.params.id
  User
    .find({ _id: id }, function (err, user) {
      if (!err) {
        if (!user) {
          res.status(410).json({ message: 'user has been already deleted' })
        }
      } else {
        res.status(403).json({ message: 'user delete failed' })
      }
    }).remove(function (err, removed) {
      if (!err) {
        res.json(removed)
      } else {
        res.status(403).json({ message: err })
      }
    })
})

export default router
