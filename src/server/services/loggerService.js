import config from "./configService";
import winston, { format, transports } from "winston";
const { combine, timestamp, label, json, printf } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  format: combine(
    label({ label: `${config.SERVICE_NAME} ${config.SERVICE_VERSION}` }),
    timestamp(),
    logFormat,
    json()
  ),
  transports: [new transports.Console()],
});

export default logger;
