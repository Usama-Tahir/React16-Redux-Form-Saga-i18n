import mongoose, { Schema } from 'mongoose'

var itemSchema = new Schema({
  title: String,
  stock: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: Date
})

itemSchema.pre('save', function (next) {
  this.updated_at = new Date()
  next()
})

var Item = mongoose.model('Item', itemSchema)

// export default User;
module.exports = Item
