import dotenv from "dotenv";
import pkg from "../../../package.json";

dotenv.config();

const { LOGGER_LEVEL, NODE_ENV, PORT } = process.env;

const config = {
  PORT: PORT || 7080,
  SERVICE_NAME: pkg.name,
  SERVICE_VERSION: pkg.version,
  LOGGER_LEVEL: NODE_ENV === "test" ? "silent" : LOGGER_LEVEL,
  ENV: NODE_ENV,
};

export default config;
