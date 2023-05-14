import { Schema } from "mongoose";
/* eslint-disable */
let mongoose = require('mongoose').set('debug', true)

let campaignSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  commerce_id: Schema.Types.ObjectId,
  name: String,
  min_transaction_amount: Number,
  reward_type: String,
  reward_percentage: Number,
  transactions_before: Schema.Types.Date,
  transactions_after: Schema.Types.Date,
  branches: Array,
  start_date: Schema.Types.Date,
  end_date: Schema.Types.Date,
  campaign_active: Boolean,
  created_at: Schema.Types.Date,
  updated_at: Schema.Types.Date,
})

module.exports = mongoose.model('Campaign', campaignSchema, 'Campaigns')