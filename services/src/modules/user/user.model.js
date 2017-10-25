// import dotenv from '../config'

import { mongoose, Schema } from './../../server/db' // MUST BE HERE !!!!!!!!
import bcrypt from 'bcrypt'
import { hashPassword } from './user.helper'

var userSchema = new Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  admin: Boolean,
  refreshToken: {
    type: String,
    unique: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: Date
})

userSchema.virtual('fullName').get(function virtualFullName () {
  return
  `${this.name.first} ${this.name.last}`
})

userSchema.pre('save', function (next) {
  this.updated_at = new Date()
  next()
})

userSchema.methods.comparePassword = function comparePassword (candidatePassword) {
  try {
    return bcrypt.compare(candidatePassword, this.password)
  } catch (err) {
    throw new Error(err)
  }
}

userSchema.pre('save', async function (next) {
  const user = this

  if (user && user.isModified('password')) {
    try {
      user.password = await hashPassword(user.password)
      return next()
    } catch (err) {
      return next(err)
    }
  } else {
    return next()
  }
})

const mongoosePaginate = require('mongoose-paginate')

userSchema.plugin(mongoosePaginate)

mongoosePaginate.paginate.options = { 
  lean:  true,
  limit: 20
};

var User = mongoose.model('User', userSchema)


// export default User;
module.exports = User
