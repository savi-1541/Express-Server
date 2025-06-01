import Express from "express";
import env from "dotenv";

import { initializeDB } from "./database/index.js";
import { router } from "./route/index.js";
import * as util from "./utils/index.js";
import middleware from "./middleware/index.js";

env.config();

export const app = Express();

app.use(
  Express.urlencoded({
    extended: true,
  }),
);

app.use(Express.json());

app.use("/api", router);
app.use(middleware.expressErrorHandler);

app.listen(Number(process.env.PORT) || 3333, () => {
  util.logger.info(
    `Server is listening in the port ${process.env.PORT || 3333}`,
  );
  initializeDB()
    .then(() => {
      util.logger.info("Database connected!!");
    })
    .catch((err) => {
      util.logger.info(`Error while connecting to DB ${err.message}`);
    });
});
