import { config } from "../../../config";
import { UserByIdFinder } from "../../application/user-by-id-finder";
import { UserRepository } from "../../domain/users/user-repository";
import { UserGetController } from "../http/users/user-get-controller";
import { MongoUserRepository } from "../repositories/user-repository/mongo-user-repository";

const getUserRepository = (): UserRepository => {
  switch (config.database) {
    case "mongo":
      return new MongoUserRepository();
    // En caso de otras db´s
    // case "elastic":
    //   return new ElasticUserRepository();
    // case "mySQL":
    //   return new MySQLUserRepository();
    default:
      throw new Error("Invalid Database type");
  }
};

const userByIdFinder = new UserByIdFinder(getUserRepository());

export const userGetController = new UserGetController(userByIdFinder);
