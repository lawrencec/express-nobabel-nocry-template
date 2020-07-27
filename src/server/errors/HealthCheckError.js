class HealthCheckError extends Error {
  constructor(message = "") {
    super(`${message}`);
    this.name = this.constructor.name;
    this.statusCode = 503;
    this.error = this.message;
  }
}

export default HealthCheckError;
