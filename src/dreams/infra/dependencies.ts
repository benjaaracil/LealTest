import { config } from "../../config";
import { DreamByIdFinder } from "../application/dream-by-id-finder";
import { DreamRepository } from "../domain/dream-repository";
import { MongoDreamRepository } from "./dream-repository/mongo-dream-repository";
import { DreamGetController } from "./http/dream-get-controller";
// import { ElasticDreamRepository } from "./dream-repository/elastic-dream-repository";
// import { MySQLDreamRepository } from "./dream-repository/mysql-dream-repository";

const getDreamRepository = (): DreamRepository => {
  switch (config.database) {
    case "mongo":
      return new MongoDreamRepository();
    // case "elastic":
    //   return new ElasticDreamRepository();
    // case "mySQL":
    //   return new MySQLDreamRepository();
    default:
      throw new Error("Invalid Database type");
  }
};

const dreamByIdFinder = new DreamByIdFinder(getDreamRepository());

export const dreamGetController = new DreamGetController(dreamByIdFinder);
