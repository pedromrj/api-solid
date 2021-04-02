import express from "express";
import { router } from "./router";
import { connect } from "mongoose";
import * as dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "../swagger.json";

dotenv.config();

connect( process.env.URL_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const app = express();

app.use(express.json());
app.use(router);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export { app }