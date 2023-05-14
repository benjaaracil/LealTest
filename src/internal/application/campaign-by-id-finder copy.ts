import { Campaign } from "../domain/campaigns/campaign";
import { CampaignNotFound } from "../domain/campaigns/campaign-not-found";
import { CampaignRepository } from "../domain/campaigns/campaign-repository";

export class CampaignByIdFinder {
  constructor(private readonly campaignRepository: CampaignRepository) {}

  async run(id: string): Promise<Campaign> {
    const campaign = await this.campaignRepository.getById(id);

    if (!campaign) {
      throw new CampaignNotFound(id);
    }

    return campaign;
  }
}
