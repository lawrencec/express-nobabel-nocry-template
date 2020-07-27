import { Router } from "express";
import HealthCheckError from "../errors/HealthCheckError";
import HealthCheckService from "../services/healthCheckService";

const router = Router();

router.get("/health-check", (req, res, next) => {
  try {
    const status = HealthCheckService.check();
    return res.status(200).json(status);
  } catch (e) {
    next(new HealthCheckError(e.message));
  }
});

export default router;
