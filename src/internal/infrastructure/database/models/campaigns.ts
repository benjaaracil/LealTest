import { Schema } from "mongoose";
/* eslint-disable */
let mongoose = require('mongoose').set('debug', true)

let campaignSchema = new mongoose.Schema({
  // _id: Schema.Types.ObjectId,
  commerce_id: {
    type: Schema.Types.ObjectId, 
    required: true
  },
  name:{
    type: String, 
    required: true
  },
  description:{
    type: String, 
    required: true
  },
  min_transaction_amount: Number,
  reward_type: {
    type: String, 
    required: true,
    enum: ["points", "coins", "both"]
  },
  reward_percentage: {
    type: Number, 
    min: [1, "Percentage must be 1 at least"]
  },
  transactions_before: {
    type: Schema.Types.Date,
    required: true
  },
  transactions_after: {
    type: Schema.Types.Date,
    required: true
  },
  branches: [Schema.Types.ObjectId],
  start_date: {
    type: Schema.Types.Date,
    required: true
  },
  end_date: {
    type: Schema.Types.Date,
    required: true
  },
  campaign_active: {
    type: Boolean,
    default: true
  },
  created_at: Schema.Types.Date,
  updated_at: Schema.Types.Date,
})

module.exports = mongoose.model('Campaign', campaignSchema, 'Campaigns')