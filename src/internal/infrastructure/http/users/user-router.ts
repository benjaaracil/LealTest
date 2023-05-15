import express from "express";

import { userGetController } from "../../dependencies/user-dependencies";

const userRouter = express.Router();

userRouter.get("/find/:id", userGetController.run.bind(userGetController));

export { userRouter };
