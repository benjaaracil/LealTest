/* eslint-disable */
import { User } from "../../../domain/users/user";
import { UserRepository } from "../../../domain/users/user-repository";
// import { UserError } from "../../../domain/users/user-error";
let Users = require('../../database/models/users');

export class MongoUserRepository implements UserRepository {

  async getById(id: string): Promise<User | Error> {
    console.log("Using Mongo for users!");
    try {
      const rawUser = await Users.findById(id).orFail();
      // console.log(rawUser)
      return new User(
        rawUser.id, 
        rawUser.name, 
        rawUser.email,
        rawUser.password,
        rawUser.full_name,
        rawUser.points,
        rawUser.coins,
      )
    } catch (error: any){
      // console.log(error.name)
      // console.log(error.message)
      return error
    }
  }
}
