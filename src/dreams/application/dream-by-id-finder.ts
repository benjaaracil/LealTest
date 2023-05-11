import { Dream } from "../domain/dream";
import { DreamNotFound } from "../domain/dream-not-found";
import { DreamRepository } from "../domain/dream-repository";

export class DreamByIdFinder {
  constructor(private readonly dreamRepository: DreamRepository) {}

  async run(id: string): Promise<Dream> {
    const dream = await this.dreamRepository.getById(id);

    if (!dream) {
      throw new DreamNotFound(id);
    }

    return dream;
  }
}
