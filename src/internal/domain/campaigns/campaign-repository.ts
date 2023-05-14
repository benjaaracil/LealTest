import { Campaign } from "./campaign";

export interface CampaignRepository {
  getById(id: string): Promise<Campaign | null>;
}
