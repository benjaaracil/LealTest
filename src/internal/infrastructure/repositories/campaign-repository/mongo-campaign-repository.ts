/* eslint-disable */
import { Campaign } from "../../../domain/campaigns/campaign";
import { CampaignRepository } from "../../../domain/campaigns/campaign-repository";
let Campaigns = require('../../database/models/campaigns');

export class MongoCampaignRepository implements CampaignRepository {

  async getById(id: string): Promise<Campaign | null> {
    console.log("Using Mongo!");

    const rawCampaign = await Campaigns.findById(id);
    // console.log(rawCampaign)


    return rawCampaign ? new Campaign(
      rawCampaign.id, 
      rawCampaign.commerce_id, 
      rawCampaign.name,
      rawCampaign.min_transaction_amount,
      rawCampaign.reward_type,
      rawCampaign.reward_percentage,
      rawCampaign.transactions_before,
      rawCampaign.transactions_after,
      rawCampaign.branches,
      rawCampaign.start_date,
      rawCampaign.end_date,
      rawCampaign.campaign_active,
      rawCampaign.created_at,
      rawCampaign.updated_at,
      ) : null;
  }
}
