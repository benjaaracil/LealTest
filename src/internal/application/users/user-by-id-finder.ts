import { User } from "../../domain/users/user";
import { UserDatabaseError, UserNotFound } from "../../domain/users/user-error";
import { UserRepository } from "../../domain/users/user-repository";

export class UserByIdFinder {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: string): Promise<User | Error> {
    const user = await this.userRepository.getById(id);
    if (user instanceof Error) {
      throw user.name == "DocumentNotFoundError"
        ? new UserNotFound(id)
        : new UserDatabaseError(user.message);
    }
    return user;
  }
}
