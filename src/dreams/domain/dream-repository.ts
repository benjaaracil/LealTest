import { Dream } from "./dream";

export interface DreamRepository {
  getById(id: string): Promise<Dream | null>;
}
