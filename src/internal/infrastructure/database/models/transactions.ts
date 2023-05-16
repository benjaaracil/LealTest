import { Schema } from "mongoose";
/* eslint-disable */
let mongoose = require('mongoose').set('debug', true)

let transactionSchema = new mongoose.Schema({
  // _id: Schema.Types.ObjectId,
  user_id:{
    type: String, 
    required: true
  },
  commerce_id: {
    type: Schema.Types.ObjectId, 
    required: true
  },
  branch_id: {
    type: Schema.Types.ObjectId, 
    required: true
  },
  transaction_date: {
    type: Schema.Types.Date,
    required: true
  },
  amount: {
    type: Number, 
    min: [1, "Amount must be 1 at least"]
  },
  points: Number,
  coins: Number,
  created_at: Schema.Types.Date,
  updated_at: Schema.Types.Date,
})

module.exports = mongoose.model('Transaction', transactionSchema, 'Transactions')