class HealthCheckError extends Error {
  constructor(message = "") {
    super(`${message}`);
    this.name = this.constructor.name;
    this.statusCode = 503;
  }
}

export default HealthCheckError;
