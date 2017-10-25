import mongoose, { Schema } from 'mongoose'

const env = process.env.NODE_ENV || 'development'
const config = require('./config')[env]

console.log(`Database name: ${config.database.name}`)
// Set up default mongoose connection
var mongoDB = `mongodb://${config.database.host}/${config.database.name}`
mongoose.Promise = global.Promise
mongoose.connect(mongoDB, {useMongoClient: true})
if (env === 'development') {
  mongoose.set('debug', true)
}

// Get the default connection
var connection = mongoose.connection

// Bind connection to error event (to get notification of connection errors)
connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

export {mongoose, connection, Schema}
