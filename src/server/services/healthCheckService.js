import config from "../services/configService";
const { SERVICE_NAME, SERVICE_VERSION } = config;

const HealthCheckService = {
  check: () => {
    return {
      service: SERVICE_NAME,
      version: SERVICE_VERSION,
    };
  },
};

export default HealthCheckService;
