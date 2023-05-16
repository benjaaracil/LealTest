import { Schema } from "mongoose";
/* eslint-disable */
let mongoose = require('mongoose').set('debug', true)

let commerceSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  conversion_rate_points: Number,
  conversion_rate_coins: Number,
  created_at: Schema.Types.Date,
  updated_at: Schema.Types.Date
})

module.exports = mongoose.model('Commerce', commerceSchema, 'Commerces')