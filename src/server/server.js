import config from "./services/configService";
import logger from "./services/loggerService";
import server from "./app";

const { PORT } = config;

server.listen(PORT, () => {
  logger.info(`Server running at http://127.0.0.1:${PORT}`);
});
