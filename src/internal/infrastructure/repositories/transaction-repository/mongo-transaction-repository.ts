/* eslint-disable */
import { TransactionRepository } from "../../../domain/transactions/transaction-repository";
import { TransactionPostBody } from "../../../domain/transactions/transaction-interfaces";
let Transactions = require('../../database/models/transactions');
let Users = require('../../database/models/users');

export class MongoTransactionRepository implements TransactionRepository {
  async create(body: TransactionPostBody): Promise<Error | null> {
    console.log("Using Mongo for transactions!");
    try{
      const valoresASumar = {
        points: body.points,
        coins: body.coins
      };
      //Creo transaccion
      await Transactions.create(body);
      //Update de usuario
      await Users.findOneAndUpdate({
        _id: body.user_id
      }, {
        $inc: valoresASumar,
      });
      
    } catch (error: any) {
      return error
    }
    return null
  }
}