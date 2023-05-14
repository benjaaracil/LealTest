import { User } from "../domain/users/user";
import { UserNotFound } from "../domain/users/user-not-found";
import { UserRepository } from "../domain/users/user-repository";

export class UserByIdFinder {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: string): Promise<User> {
    const user = await this.userRepository.getById(id);

    if (!user) {
      throw new UserNotFound(id);
    }

    return user;
  }
}
