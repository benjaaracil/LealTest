import { Campaign } from "../../domain/campaigns/campaign";
import {
  CampaignDatabaseError,
  CampaignNotFoundAll,
} from "../../domain/campaigns/campaign-errors";
import { CampaignRepository } from "../../domain/campaigns/campaign-repository";

export class CampaignList {
  constructor(private readonly campaignRepository: CampaignRepository) {}

  async run(commerceID: string, branchID: string): Promise<Campaign[] | Error> {
    const campaign = await this.campaignRepository.getAll(commerceID, branchID);
    if (campaign instanceof Error) {
      throw campaign.name == "DocumentNotFoundError"
        ? new CampaignNotFoundAll()
        : new CampaignDatabaseError(campaign.message);
    }
    return campaign;
  }
}
