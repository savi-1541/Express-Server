import { Router } from "express";

import * as controller from "../../controller/index.js";

export const authRouter = new Router();

authRouter.post("/sign-up", controller.authController.createAccount);
authRouter.post("/login", controller.authController.login);
