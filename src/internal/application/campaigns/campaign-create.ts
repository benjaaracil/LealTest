// import { Campaign } from "../domain/campaigns/campaign";
import {
  CampaignDatabaseError,
  CampaignNotCreated,
} from "../../domain/campaigns/campaign-errors";
import { CampaignRepository } from "../../domain/campaigns/campaign-repository";
import { CampaignPostBody } from "../../domain/campaigns/campaing-interfaces";

export class CampaignCreate {
  constructor(private readonly campaignRepository: CampaignRepository) {}

  async run(body: CampaignPostBody): Promise<Error | null> {
    const error = await this.campaignRepository.create(body);
    if (error instanceof Error) {
      throw error.name == "ValidationError"
        ? new CampaignNotCreated(error.message)
        : new CampaignDatabaseError(error.message);
    }

    return null;
  }
}
