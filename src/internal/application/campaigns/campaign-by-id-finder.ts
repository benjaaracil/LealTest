import { Campaign } from "../../domain/campaigns/campaign";
import {
  CampaignDatabaseError,
  CampaignNotFound,
} from "../../domain/campaigns/campaign-errors";
import { CampaignRepository } from "../../domain/campaigns/campaign-repository";

export class CampaignByIdFinder {
  constructor(private readonly campaignRepository: CampaignRepository) {}

  async run(id: string): Promise<Campaign | Error> {
    const campaign = await this.campaignRepository.getById(id);
    if (campaign instanceof Error) {
      throw campaign.name == "DocumentNotFoundError"
        ? new CampaignNotFound(id)
        : new CampaignDatabaseError(campaign.message);
    }
    return campaign;
  }
}
