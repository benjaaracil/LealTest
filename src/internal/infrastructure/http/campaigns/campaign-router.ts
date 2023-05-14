import express from "express";

import { campaignGetController } from "../../dependencies/campaign-dependencies";

const campaignRouter = express.Router();

campaignRouter.get(
  "/:id",
  campaignGetController.run.bind(campaignGetController)
);

export { campaignRouter };
