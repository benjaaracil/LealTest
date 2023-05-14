import express from "express";

import { userGetController } from "../../dependencies/user-dependencies";

const userRouter = express.Router();

userRouter.get("/:id", userGetController.run.bind(userGetController));

export { userRouter };
