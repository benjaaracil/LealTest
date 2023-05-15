// import { Campaign } from "../domain/campaigns/campaign";
import { CampaignNotCreated } from "../../domain/campaigns/campaign-errors";
import { CampaignRepository } from "../../domain/campaigns/campaign-repository";
import { CampaignPostBody } from "../../domain/campaigns/campaing-interfaces";

export class CampaignCreate {
  constructor(private readonly campaignRepository: CampaignRepository) {}

  async run(body: CampaignPostBody): Promise<string> {
    const error = await this.campaignRepository.create(body);

    if (error) {
      throw new CampaignNotCreated();
    }

    return "Campaña creada correctamente";
  }
}
