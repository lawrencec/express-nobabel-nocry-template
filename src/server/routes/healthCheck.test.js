import request from "supertest";
import HealthCheckService from "../services/healthCheckService";
import app from "../app";

jest.mock("../services/healthCheckService");

const route = "/health-check";

describe(`GET ${route}`, () => {
  it("should return 200 and log a message", () => {
    return request(app)
      .get(`${route}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(() => {
        expect(HealthCheckService.check).toHaveBeenCalledWith();
      });
  });

  it("should return error response when there is an error", () => {
    HealthCheckService.check.mockImplementation(() => {
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
