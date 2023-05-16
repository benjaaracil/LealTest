import { Commerce } from "./commerce";
// import { UserError } from "../../domain/users/user-error";

export interface CommerceRepository {
  getById(id: string): Promise<Commerce | null>;
}
