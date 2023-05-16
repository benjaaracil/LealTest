/* eslint-disable */
import { TransactionRepository } from "../../../domain/transactions/transaction-repository";
import { TransactionPostBody } from "../../../domain/transactions/transaction-interfaces";
// let Transactions = require('../../database/models/transactions');

export class MongoTransactionRepository implements TransactionRepository {
  async create(body: TransactionPostBody): Promise<Error | null> {
    console.log("Using Mongo for transactions!");
    try{
      // await Transactions.create(body);
    } catch (error: any) {
      return error
    }
    return null
  }
}