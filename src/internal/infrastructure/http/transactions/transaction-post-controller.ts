import { Request, Response } from "express";

import { TransactionCreate } from "../../../application/transactions/transaction-create";
import { TransactionNotCreated } from "../../../domain/transactions/transaction-errors";
import { TransactionPostBody } from "../../../domain/transactions/transaction-interfaces";

export class TransactionPostController {
  constructor(private readonly transactionCreate: TransactionCreate) {}

  async transactionConfig(req: Request, res: Response) {
    const { branch_id } = req.params;
    const instance = req.body as TransactionPostBody;
    instance.branch_id = branch_id;

    try {
      await this.transactionCreate.run(instance);
      return res.status(200).send({ message: "Factura cargada correctamente" });
    } catch (error: any) {
      if (error instanceof TransactionNotCreated) {
        return res.status(409).send({ message: error.message });
      }

      return res.status(500).send({ message: error.message });
    }
  }
}
