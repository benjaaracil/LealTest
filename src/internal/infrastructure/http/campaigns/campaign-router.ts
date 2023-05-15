import express from "express";

import { campaignGetController } from "../../dependencies/campaign-dependencies";

const campaignRouter = express.Router();

//El orden del get: En ultimo lugar debe ir el :id
campaignRouter.get(
  "/all",
  campaignGetController.campaignAll.bind(campaignGetController)
);
campaignRouter.get(
  "/:id",
  campaignGetController.campaignByID.bind(campaignGetController)
);

export { campaignRouter };
