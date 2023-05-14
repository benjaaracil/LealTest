import { Schema } from "mongoose";
/* eslint-disable */
let mongoose = require('mongoose').set('debug', true)

let userSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  username: String,
  email: String,
  password: String,
  full_name: String,
  points: Number,
  coins: Number
})

module.exports = mongoose.model('User', userSchema, 'Users')