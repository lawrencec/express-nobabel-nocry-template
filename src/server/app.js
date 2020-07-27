import errorHandler from "./middleware/errorHandler";
import logger from "./services/loggerService";
import healthCheckRoute from "./routes/health-check";
import notFoundRoute from "./routes/notFound";
import express from "express";

const app = express();

app.set("x-powered-by", false);

app.use(logger);

app.use("/", healthCheckRoute);

app.use(notFoundRoute);

app.use(errorHandler);

export default app;
