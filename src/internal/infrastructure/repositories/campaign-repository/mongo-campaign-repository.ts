/* eslint-disable */
import mongoose from "mongoose";
import { Campaign } from "../../../domain/campaigns/campaign";
import { CampaignRepository } from "../../../domain/campaigns/campaign-repository";
import { CampaignPostBody } from "../../../domain/campaigns/campaing-interfaces";
let Campaigns = require('../../database/models/campaigns');

export class MongoCampaignRepository implements CampaignRepository {

  async getAll(commerceID: string, branchID: string): Promise<Campaign[] | Error> {
    console.log("Using Mongo for campaigns!");
    try{
      const queryCommerce = { commerce_id: commerceID };
      const queryBranches = { branches: new mongoose.Types.ObjectId(branchID) };
    
      let campaigns = [];
      let rawCampaign = null;
      //TO DO: Optimizar if´s
      if (branchID){
        rawCampaign = await Campaigns.find(queryBranches).orFail();
      } else if (commerceID){
        rawCampaign = await Campaigns.find(queryCommerce).orFail();
      } else {
        rawCampaign = await Campaigns.find().orFail();
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
      return campaigns
    } catch(error: any){
      return error
    }
  }

  async getById(id: string): Promise<Campaign | Error> {
    console.log("Using Mongo for campaigns!");
    try{
      const rawCampaign = await Campaigns.findById(id).orFail();
      // console.log(rawCampaign)
      return new Campaign(
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
        )
    } catch(error: any){
      return error
    }
  }

  async create(body: CampaignPostBody): Promise<Error | null> {
    console.log("Using Mongo for campaigns!");
    try{
      await Campaigns.create(body);
    } catch (error: any) {
      return error
    }
    return null
  }
}