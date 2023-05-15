import { Request, Response } from "express";

import { CampaignCreate } from "../../../application/campaigns/campaign-create";
import { CampaignNotCreated } from "../../../domain/campaigns/campaign-errors";
import { CampaignPostBody } from "../../../domain/campaigns/campaing-interfaces";

export class CampaignPostController {
  constructor(private readonly campaignCreate: CampaignCreate) {}

  async campaignConfig(req: Request, res: Response) {
    const instance = req.body as CampaignPostBody;
    try {
      await this.campaignCreate.run(instance);
      return res.status(200).send("Campaña creada correctamente");
    } catch (error) {
      if (error instanceof CampaignNotCreated) {
        return res.status(404).send();
      }

      return res.status(500).send();
    }
  }
}
