import { config } from "../../../config";
import { CampaignByIdFinder } from "../../application/campaigns/campaign-by-id-finder";
import { CampaignCreate } from "../../application/campaigns/campaign-create";
import { CampaignList } from "../../application/campaigns/campaign-list";
import { CampaignRepository } from "../../domain/campaigns/campaign-repository";
import { CampaignGetController } from "../http/campaigns/campaign-get-controller";
import { CampaignPostController } from "../http/campaigns/campaign-post-controller";
import { MongoCampaignRepository } from "../repositories/campaign-repository/mongo-campaign-repository";

const getCampaignRepository = (): CampaignRepository => {
  switch (config.database) {
    case "mongo":
      return new MongoCampaignRepository();
    default:
      throw new Error("Invalid Database type");
  }
};

const campaignByIdFinder = new CampaignByIdFinder(getCampaignRepository());
const campaignList = new CampaignList(getCampaignRepository());
const campaignCreate = new CampaignCreate(getCampaignRepository());

export const campaignGetController = new CampaignGetController(
  campaignByIdFinder,
  campaignList
);
export const campaignPostController = new CampaignPostController(
  campaignCreate
);
