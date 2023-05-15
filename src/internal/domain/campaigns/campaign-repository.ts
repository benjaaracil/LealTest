import { Campaign } from "./campaign";
import { CampaignPostBody } from "./campaing-interfaces";

export interface CampaignRepository {
  getById(id: string): Promise<Campaign | Error>;
  getAll(commerceID: string, branchID: string): Promise<Campaign[] | Error>;
  create(body: CampaignPostBody): Promise<Error | null>;
}
