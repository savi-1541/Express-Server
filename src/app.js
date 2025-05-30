import Express from "express";
import env from "dotenv";
import { initializeDB } from "./database/index.js";

env.config();

const app = Express();

app.use(
  Express.urlencoded({
    extended: true,
  }),
);

app.use(Express.json());

app.listen(Number(process.env.PORT) || 3333, () => {
  console.log(`Server is listening in the port ${process.env.PORT || 3333}`);
  initializeDB()
    .then(() => {
      console.log("Database connected!!");
    })
    .catch((err) => {
      console.log(`Error while connecting to DB ${err.message}`);
    });
});
