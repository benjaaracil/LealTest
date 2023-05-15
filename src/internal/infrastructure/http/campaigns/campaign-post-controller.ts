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
      return res.status(200).send({ message: "Campaña creada correctamente" });
    } catch (error: any) {
      if (error instanceof CampaignNotCreated) {
        return res.status(409).send({ message: error.message });
      }

      return res.status(500).send({ message: error.message });
    }
  }
}
