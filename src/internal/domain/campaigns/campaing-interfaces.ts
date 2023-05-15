import { Schema } from "mongoose";

export interface CampaignPostBody {
  commerce_id: string;
  name: string;
  description: string;
  min_transaction_amount: number;
  reward_type: string;
  reward_percentage: number;
  branches: Schema.Types.ObjectId[];
  transactions_before: string;
  transactions_after: string;
  start_date: string;
  end_date: string;
}
