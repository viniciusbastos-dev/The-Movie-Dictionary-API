import "express-async-errors";
import express from "express";
import trendingRouter from "./controllers/trending";
import { errorHandler, unknownEndpoint } from "./utils/middleware";

const app = express();

app.use("/api/trending", trendingRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
