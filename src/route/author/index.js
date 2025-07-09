import { Router } from "express";

import middleware from "../../middleware/index.js";

import * as controller from "../../controller/index.js";

export const authorRouter = new Router();

authorRouter.get(
  "/list",
  middleware.checkAccess(["user"]),
  controller.authorController.listAuthor,
);
authorRouter.get(
  "/fetch/:id",
  middleware.checkAccess(["user"]),
  controller.authorController.fetchAuthorInfo,
);
authorRouter.put(
  "/:id",
  middleware.checkAccess(["author"]),
  controller.authorController.updateAuthorInfo,
);
