import { Router } from "express";

import * as controller from "../controller/index.js";
import { authRouter } from "./auth/index.js";

export const router = new Router();

router.get("/health-check", controller.healthCheckController.healthCheck);
router.use("/auth", authRouter);
