var env = process.env.NODE_ENV || 'development'
var config = require('../server/config')[env]
import { mongoose } from '../server/db' // MUST BE HERE !!!!!!!!
const User = require('../models/user')

const seedUser = {
  email: 'mapoart@gmail.com',
  password: 'mypassword',
  username: 'mapoart',
  name: 'Marcin Polak',
  admin: true
}

const res = new User(seedUser).save().catch(error => { console.error('MongoDB error cought: ', error.message) })

const seedRandomUsers = (numberOfUsers) => {
  var fakery = require('mongoose-fakery')

  // generate 10 random full names
  var names = [], i;
  var emailProviders = ['@gmail.com', '@aol.com', '@wp.pl']
  for (i = 0; i < 10000; i++) {
    let name = fakery.g.fullname()()
    let randomProvider = emailProviders[Math.floor(Math.random() * emailProviders.length)]
    let email = name.replace(' ', '.').toLowerCase() + fakery.g.str(5)() + randomProvider
    let username = name.replace(' ', '').toLowerCase() + fakery.g.str(5)()
    let password = fakery.g.str(10)()
    let userdata = {
      name: name,
      email: email,
      username: username,
      password: password
    }
    names.push(userdata)

    let newUser = Object.assign(new User(), userdata)
    newUser.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('User saved successfully!');
      }

    })
    // fakery.fake('users', User, userdata);
  }
}

console.log(res)
console.log('done!')
