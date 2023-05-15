export class UserNotFound extends Error {
  constructor(id: string) {
    super(`User not found "${id}"`);
  }
}
export class UserDatabaseError extends Error {
  constructor(message: string) {
    super(message);
  }
}
