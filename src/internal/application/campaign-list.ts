import { Campaign } from "../domain/campaigns/campaign";
import { CampaignNotFoundAll } from "../domain/campaigns/campaign-not-found";
import { CampaignRepository } from "../domain/campaigns/campaign-repository";

export class CampaignList {
  constructor(private readonly campaignRepository: CampaignRepository) {}

  async run(commerceID: string, branchID: string): Promise<Campaign[]> {
    const campaign = await this.campaignRepository.getAll(commerceID, branchID);

    if (!campaign) {
      throw new CampaignNotFoundAll();
    }

    return campaign;
  }
}
