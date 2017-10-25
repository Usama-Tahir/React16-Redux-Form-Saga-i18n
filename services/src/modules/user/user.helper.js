import bcrypt from 'bcrypt'
import moment from 'moment'
import jwt from 'jsonwebtoken'

var env = process.env.NODE_ENV || 'development'
var config = require('./../../server/config')[env]

var jwtSecret = config.jwt.supersecret
var jwtExpiresin = config.jwt.expirein
var jwtRefreshExpireIn = config.jwt.refreshExpireIn

export const hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(5)
  password = await bcrypt.hash(password, salt, null)
  return password
}

export const createToken = (user) => {
  let tokenData = {
    '_id': user._id,
    'email': user.email,
    'name': user.name,
    'username': user.username,
    'admin': user.admin,
    //'aud': '', // https://tools.ietf.org/html/rfc7519#section-4.1.3
    //'': 
  }

  let token = jwt.sign(tokenData, jwtSecret, {
    expiresIn: jwtExpiresin
  })

  return token
}

export const createRefreshToken = (data) => {
  //
  return jwt.sign({type: 'refresh', date: Date.now(), ...data}, jwtSecret, { expiresIn: jwtRefreshExpireIn });
}

export const getToken = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') { // Authorization: Bearer g1jipjgi1ifjioj
    // Handle token presented as a Bearer token in the Authorization header
    return req.headers.authorization.split(' ')[1]
  } else if (req.query && req.query.token) {
    // Handle token presented as URI param
    return req.query.token
  } else if (req.cookies && req.cookies.token) {
    // Handle token presented as a cookie parameter
    return req.cookies.token
  }
  // If we return null, we couldn't find a token.
  // In this case, the JWT middleware will return a 401 (unauthorized) to the client for this request
  return null; 
}
