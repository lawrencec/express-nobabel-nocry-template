import { Router } from "express";
import config from "../services/configService";
import logger from "../services/loggerService";
import HealthCheckError from "../errors/HealthCheckError";
const { SERVICE_NAME, SERVICE_VERSION } = config;

const router = Router();

router.get("/status", (req, res, next) => {
  try {
    // Put some depedency health check here e.g logging
    logger.info("health check status");
    return res.status(200).json({
      service: SERVICE_NAME,
      version: SERVICE_VERSION,
    });
  } catch (e) {
    next(new HealthCheckError(e.message));
  }
});

export default router;
