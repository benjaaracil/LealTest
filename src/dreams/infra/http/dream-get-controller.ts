import { Request, Response } from "express";

import { DreamByIdFinder } from "../../application/dream-by-id-finder";
import { DreamNotFound } from "../../domain/dream-not-found";

export class DreamGetController {
  constructor(private readonly dreamByIdFinder: DreamByIdFinder) {}

  async run(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const dream = await this.dreamByIdFinder.run(id);
      return res.status(200).send(dream);
    } catch (error) {
      if (error instanceof DreamNotFound) {
        return res.status(404).send();
      }

      return res.status(500).send();
    }
  }
}
