import { Router } from "express";

import middleware from "../../middleware/index.js";

import * as controller from "../../controller/index.js";

export const userRouter = new Router();

userRouter.get(
  "/list",
  middleware.checkAccess(["author"]),
  controller.userController.listUser,
);
userRouter.get("/fetch/:id", controller.userController.fetchUserInfo);
userRouter.put("/:id", controller.userController.updateUserInfo);
