import request from "supertest";
import logger from "../services/loggerService";
import app from "../app";

jest.mock("../services/loggerService");

const route = "/status";

describe(`GET ${route}`, () => {
  it("should return 200 and log a message", () => {
    return request(app)
      .get(`${route}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(() => {
        expect(logger.info).toHaveBeenCalledWith("health check status");
      });
  });

  it("should return error response when there is an error", () => {
    logger.info.mockImplementation(() => {
      throw new Error("uh-oh");
    });
    return request(app)
      .get(`${route}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(503)
      .then((res) => {
        expect(res.body).toEqual({
          error: "HealthCheckError",
          message: "uh-oh",
          statusCode: 503,
        });
      });
  });
});
