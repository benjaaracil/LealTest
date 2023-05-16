import { config } from "../../../config";
import { CommerceRepository } from "../../domain/commerces/commerce-repository";
import { MongoCommerceRepository } from "../repositories/commerce-repository/mongo-commerce-repository";

export const getCommerceRepository = (): CommerceRepository => {
  switch (config.database) {
    case "mongo":
      return new MongoCommerceRepository();
    // En caso de otras db´s
    // case "elastic":
    //   return new ElasticCommerceRepository();
    // case "mySQL":
    //   return new MySQLCommerceRepository();
    default:
      throw new Error("Invalid Database type");
  }
};
