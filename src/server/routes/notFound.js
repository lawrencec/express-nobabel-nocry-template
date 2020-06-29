import boom from "@hapi/boom";
import logger from "../services/loggerService";
import NotFoundError from "../errors/NotFoundError";

export default (req, res, next) => {
  const error = boom.notFound("Unknown uri");

  logger.info(`${error}: ${req.url}`);

  return next(new NotFoundError(error.message));
};
