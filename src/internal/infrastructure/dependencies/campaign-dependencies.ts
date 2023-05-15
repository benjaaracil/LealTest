import { config } from "../../../config";
import { CampaignByIdFinder } from "../../application/campaign-by-id-finder";
import { CampaignList } from "../../application/campaign-list";
import { CampaignRepository } from "../../domain/campaigns/campaign-repository";
import { CampaignGetController } from "../http/campaigns/campaign-get-controller";
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

export const campaignGetController = new CampaignGetController(
  campaignByIdFinder,
  campaignList
);
