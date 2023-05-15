import { Campaign } from "./campaign";

export interface CampaignRepository {
  getById(id: string): Promise<Campaign | null>;
  getAll(commerceID: string, branchID: string): Promise<Campaign[] | null>;
}
