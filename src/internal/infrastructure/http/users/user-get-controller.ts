import { Request, Response } from "express";

import { UserByIdFinder } from "../../../application/users/user-by-id-finder";
import { UserNotFound } from "../../../domain/users/user-error";

export class UserGetController {
  constructor(private readonly userByIdFinder: UserByIdFinder) {}

  async run(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await this.userByIdFinder.run(id);
      return res.status(200).send(user);
    } catch (error: any) {
      if (error instanceof UserNotFound) {
        return res.status(404).send({ message: error.message });
      }
      return res.status(500).send({ message: error.message });
    }
  }
}
