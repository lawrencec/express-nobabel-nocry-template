import config from "../services/configService";
import pino from "pino-http";

const logger = pino({
  prettyPrint: config.ENV !== "production",
  level: config.LOGGER_LEVEL,
  mixin: () => {
    return {
      service: {
        name: config.SERVICE_NAME,
        version: config.SERVICE_VERSION,
      },
    };
  },
});

export default logger;
