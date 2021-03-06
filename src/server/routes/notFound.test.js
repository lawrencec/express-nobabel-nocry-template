import request from "supertest";
import app from "../app";

jest.mock("../services/loggerService");

const route = "/rick-roll";

describe(`GET ${route}`, () => {
  it("should return 200 and log a message", () => {
    return request(app)
      .get(`${route}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404);
  });
});
