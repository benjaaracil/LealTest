import { Schema } from "mongoose";
/* eslint-disable */
let mongoose = require('mongoose').set('debug', true)

let branchSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  commerce_id: Schema.Types.ObjectId,
  name: String,
  created_at: Schema.Types.Date,
  updated_at: Schema.Types.Date
})

module.exports = mongoose.model('Branch', branchSchema, 'Branches')