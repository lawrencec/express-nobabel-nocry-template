import dotenv from "dotenv";
import pkg from "../../../package.json";

dotenv.config();

const config = {
  PORT: process.env.PORT || 7080,
  SERVICE_NAME: pkg.name,
  SERVICE_VERSION: pkg.version,
  LOGGER_LEVEL: process.env["LOGGER_LEVEL"],
};

export default config;
