/* eslint-disable */
import { User } from "../../../domain/users/user";
import { UserRepository } from "../../../domain/users/user-repository";
let Users = require('../../database/models/users');

export class MongoUserRepository implements UserRepository {

  async getById(id: string): Promise<User | null> {
    console.log("Using Mongo!");

    const rawUser = await Users.findById(id);
    // console.log(rawUser)


    return rawUser ? new User(
      rawUser.id, 
      rawUser.name, 
      rawUser.email,
      rawUser.password,
      rawUser.full_name,
      rawUser.points,
      rawUser.coins,
      ) : null;
  }
}
