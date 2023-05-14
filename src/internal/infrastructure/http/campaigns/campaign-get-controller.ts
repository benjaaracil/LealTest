import { Request, Response } from "express";

import { CampaignByIdFinder } from "../../../application/campaign-by-id-finder copy";
import { CampaignNotFound } from "../../../domain/campaigns/campaign-not-found";

export class CampaignGetController {
  constructor(private readonly campaignByIdFinder: CampaignByIdFinder) {}

  async run(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const campaign = await this.campaignByIdFinder.run(id);
      return res.status(200).send(campaign);
    } catch (error) {
      if (error instanceof CampaignNotFound) {
        return res.status(404).send();
      }

      return res.status(500).send();
    }
  }
}
