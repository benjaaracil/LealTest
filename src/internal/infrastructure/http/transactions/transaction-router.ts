import express from "express";

import { transactionPostController } from "../../dependencies/transaction-dependencies";

const transactionRouter = express.Router();

transactionRouter.post(
  "/load_invoice/:branch_id",
  transactionPostController.transactionConfig.bind(transactionPostController)
);

export { transactionRouter };
