// Turn off logging when requests are made to the api
jest.mock("./src/server/middleware/requestLogger");
jest.mock("./src/server/middleware/errorLogger");
