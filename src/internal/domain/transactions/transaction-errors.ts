export class TransactionNotFound extends Error {
  constructor(id: string) {
    super(`Transaction not found "${id}"`);
  }
}
export class TransactionNotFoundAll extends Error {
  constructor() {
    super(`Not transactions found`);
  }
}
export class TransactionNotCreated extends Error {
  constructor(message: string) {
    super(message);
  }
}
export class TransactionDatabaseError extends Error {
  constructor(message: string) {
    super(message);
  }
}
