import expressWinston from "express-winston";
import { format, transports } from "winston";

const { combine, timestamp, json } = format;

const requestLogger = expressWinston.errorLogger({
  transports: [new transports.Console()],
  format: combine(timestamp(), json()),
});

export default requestLogger;
