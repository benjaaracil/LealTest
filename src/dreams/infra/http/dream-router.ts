import express from "express";

import { dreamGetController } from "../dependencies";

const dreamRouter = express.Router();

dreamRouter.get("/:id", dreamGetController.run.bind(dreamGetController));

export { dreamRouter };
