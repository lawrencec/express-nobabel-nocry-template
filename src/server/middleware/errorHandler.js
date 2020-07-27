import boom from "@hapi/boom";

const errorHandler = (err, req, res, next) => {
  const logger = req.log;
  const message = boom.isBoom(err) ? err.output.payload : err.message;
  const statusCode = boom.isBoom(err) ? err.output.statusCode : err.statusCode;

  if (res.headersSent) {
    return next(err);
  }

  logger.error(err);

  return res.status(statusCode).json({
    statusCode,
    error: err.name,
    message,
  });
};

export default errorHandler;
