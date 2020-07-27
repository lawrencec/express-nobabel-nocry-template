import config from "./services/configService";
import server from "./app";

const { PORT } = config;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Server running at http://127.0.0.1:${PORT}`);
});
