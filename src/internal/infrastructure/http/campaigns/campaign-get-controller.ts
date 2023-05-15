import { Request, Response } from "express";

import { CampaignByIdFinder } from "../../../application/campaign-by-id-finder";
import { CampaignList } from "../../../application/campaign-list";
import { CampaignNotFound } from "../../../domain/campaigns/campaign-not-found";

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
    } catch (error) {
      if (error instanceof CampaignNotFound) {
        return res.status(404).send();
      }

      return res.status(500).send();
    }
  }

  async campaignAll(req: Request, res: Response) {
    const commerceID: string = req.query.commerceID as string;
    const branchID: string = req.query.branchID as string;

    console.log("commerce_id", commerceID);
    console.log("branch_id", branchID);

    try {
      const campaign = await this.campaignList.run(commerceID, branchID);
      return res.status(200).send(campaign);
    } catch (error) {
      if (error instanceof CampaignNotFound) {
        return res.status(404).send();
      }

      return res.status(500).send();
    }
  }
}
