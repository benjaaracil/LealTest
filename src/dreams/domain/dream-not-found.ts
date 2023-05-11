export class DreamNotFound extends Error {
  constructor(id: string) {
    super(`Dream not found "${id}"`);
  }
}
