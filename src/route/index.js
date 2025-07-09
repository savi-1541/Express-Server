import { Router } from "express";

import middleware from "../middleware/index.js";

import * as controller from "../controller/index.js";
import { authRouter } from "./auth/index.js";
import { userRouter } from "./user/index.js";
import { authorRouter } from "./author/index.js";
import { bookRouter } from "./books/index.js";

export const router = new Router();

router.get("/health-check", controller.healthCheckController.healthCheck);
router.use("/auth", authRouter);
router.use("/user", middleware.authenticator, userRouter);
router.use("/author", middleware.authenticator, authorRouter);
router.use("/books", middleware.authenticator, bookRouter);
