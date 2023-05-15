import { User } from "./user";
// import { UserError } from "../../domain/users/user-error";

export interface UserRepository {
  getById(id: string): Promise<User | Error>;
}
