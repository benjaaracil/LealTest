import { config } from "../../../config";
import { TransactionCreate } from "../../application/transactions/transaction-create";
import { TransactionRepository } from "../../domain/transactions/transaction-repository";
import { TransactionPostController } from "../http/transactions/transaction-post-controller";
import { MongoTransactionRepository } from "../repositories/transaction-repository/mongo-transaction-repository";
import { getCampaignRepository } from "./campaign-dependencies";
import { getCommerceRepository } from "./commerce-dependencies";

export const getTransactionRepository = (): TransactionRepository => {
  switch (config.database) {
    case "mongo":
      return new MongoTransactionRepository();
    default:
      throw new Error("Invalid Database type");
  }
};

const transactionCreate = new TransactionCreate(
  getTransactionRepository(),
  getCampaignRepository(),
  getCommerceRepository()
);

export const transactionPostController = new TransactionPostController(
  transactionCreate
);
