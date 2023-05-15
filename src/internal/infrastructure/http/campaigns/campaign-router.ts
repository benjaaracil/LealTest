import express from "express";

import { campaignGetController } from "../../dependencies/campaign-dependencies";
import { campaignPostController } from "../../dependencies/campaign-dependencies";

const campaignRouter = express.Router();

//El orden del get: En ultimo lugar debe ir el :id
campaignRouter.post(
  "/create",
  campaignPostController.campaignConfig.bind(campaignPostController)
);
campaignRouter.get(
  "/all",
  campaignGetController.campaignAll.bind(campaignGetController)
);
campaignRouter.get(
  "/find/:id",
  campaignGetController.campaignByID.bind(campaignGetController)
);

export { campaignRouter };
