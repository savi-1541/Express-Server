import { Router } from "express";

import middleware from "../../middleware/index.js";

import * as controller from "../../controller/index.js";

export const bookRouter = new Router();

bookRouter.post(
  "/create",
  middleware.checkAccess(["author"]),
  controller.booksController.createBooks,
);
bookRouter.get(
  "/list",
  middleware.checkAccess(["user", "author"]),
  controller.booksController.listBooks,
);
bookRouter.get(
  "/fetch/:id",
  middleware.checkAccess(["user", "author"]),
  controller.booksController.fetchBookInfo,
);
bookRouter.put(
  "/:id",
  middleware.checkAccess(["author"]),
  controller.booksController.updateBookInfo,
);
