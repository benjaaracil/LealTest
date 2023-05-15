import { Request, Response } from "express";

import { CampaignByIdFinder } from "../../../application/campaigns/campaign-by-id-finder";
import { CampaignList } from "../../../application/campaigns/campaign-list";
import {
  CampaignNotFound,
  CampaignNotFoundAll,
} from "../../../domain/campaigns/campaign-errors";

export class CampaignGetController {
  constructor(
    private readonly campaignByIdFinder: CampaignByIdFinder,
    private readonly campaignList: CampaignList
  ) {}

  async campaignByID(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const campaign = await this.campaignByIdFinder.run(id);
      return res.status(200).send(campaign);
    } catch (error: any) {
      if (error instanceof CampaignNotFound) {
        return res.status(404).send({ message: error.message });
      }

      return res.status(500).send({ message: error.message });
    }
  }

  async campaignAll(req: Request, res: Response) {
    const commerceID: string = req.query.commerceID as string;
    const branchID: string = req.query.branchID as string;

    try {
      const campaign = await this.campaignList.run(commerceID, branchID);
      return res.status(200).send(campaign);
    } catch (error: any) {
      if (error instanceof CampaignNotFoundAll) {
        return res.status(404).send({ message: error.message });
      }

      return res.status(500).send({ message: error.message });
    }
  }
}
