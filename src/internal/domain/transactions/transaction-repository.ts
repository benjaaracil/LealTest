import { TransactionPostBody } from "./transaction-interfaces";

export interface TransactionRepository {
  create(body: TransactionPostBody): Promise<Error | null>;
}
