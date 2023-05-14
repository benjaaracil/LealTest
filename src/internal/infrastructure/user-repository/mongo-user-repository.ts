/* eslint-disable */
import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";
let Users = require('../database/models/users');

export class MongoUserRepository implements UserRepository {

  async getById(id: string): Promise<User | null> {
    console.log("Using Mongo!");

    const rawUser = await Users.findById(id);

    console.log(id)
    console.log(rawUser)


    return rawUser ? new User(rawUser.id, rawUser.name) : null;
  }
}
