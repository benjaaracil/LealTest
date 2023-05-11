import { Dream } from "../../domain/dream";
import { DreamRepository } from "../../domain/dream-repository";
import dreamDatabase from "./dream-database.json";

export class MongoDreamRepository implements DreamRepository {
  async getById(id: string): Promise<Dream | null> {
    console.log("Using Mongo!");

    const rawDream = dreamDatabase.find((dream) => dream.id === id);

    return rawDream ? new Dream(rawDream.id, rawDream.name) : null;
  }
}
