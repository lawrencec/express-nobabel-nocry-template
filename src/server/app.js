import requestLogger from "./middleware/requestLogger";
import errorLogger from "./middleware/errorLogger";
import logger from "./services/loggerService";
import statusRoute from "./routes/status";
import notFoundRoute from "./routes/notFound";
import express from "express";
import boom from "@hapi/boom";

const app = express();

app.set("x-powered-by", false);

app.use(requestLogger);

app.use("/", statusRoute);

app.use("/", notFoundRoute);

app.use(errorLogger);

app.use((err, req, res, next) => {
  const message = boom.isBoom(err) ? err.output.payload : err.message;
  const statusCode = boom.isBoom(err) ? err.output.statusCode : err.statusCode;

  if (res.headersSent) {
    next(err);
  }

  logger.error(err);

  return res.status(statusCode).json({
    statusCode,
    error: err.name,
    message,
  });
});

export default app;
