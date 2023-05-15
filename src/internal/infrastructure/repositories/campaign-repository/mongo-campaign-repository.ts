/* eslint-disable */
import mongoose from "mongoose";
import { Campaign } from "../../../domain/campaigns/campaign";
import { CampaignRepository } from "../../../domain/campaigns/campaign-repository";
let Campaigns = require('../../database/models/campaigns');

export class MongoCampaignRepository implements CampaignRepository {

  async getAll(commerceID: string, branchID: string): Promise<Campaign[] | null> {
    
    const queryCommerce = { commerce_id: commerceID };
    const queryBranches = { branches: new mongoose.Types.ObjectId(branchID) };
  
    let campaigns = [];
    let rawCampaign = null;
    //TO DO: Optimizar if´s
    if (branchID){
      rawCampaign = await Campaigns.find(queryBranches)
    } else if (commerceID){
      rawCampaign = await Campaigns.find(queryCommerce)
    } else {
      rawCampaign = await Campaigns.find()
    }
  
    for (let i = 0; i < rawCampaign.length; i++) {
      const campaign = rawCampaign[i];
      let newCampaign = new Campaign(
        campaign.id, 
        campaign.commerce_id, 
        campaign.name,
        campaign.min_transaction_amount,
        campaign.reward_type,
        campaign.reward_percentage,
        campaign.transactions_before,
        campaign.transactions_after,
        campaign.branches,
        campaign.start_date,
        campaign.end_date,
        campaign.campaign_active,
        campaign.created_at,
        campaign.updated_at,
        )
        campaigns.push(newCampaign)
    }
    // console.log(campaigns)
    return campaigns
  }

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