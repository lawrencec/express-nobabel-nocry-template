import errorHandler from "./errorHandler";
import boom from "@hapi/boom";

const setup = () => {
  const mockJson = jest.fn();
  const res = {
    status: jest.fn().mockReturnValue({
      json: mockJson,
    }),
    headersSent: false,
  };

  const req = {
    log: {
      error: jest.fn(),
    },
  };
  const next = jest.fn();

  return {
    mockJson,
    res,
    req,
    next,
  };
};

describe(`error handler`, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return correct status code and message for Boom errors", () => {
    const { mockJson, res, req, next } = setup();
    const error = boom.notFound();

    errorHandler(error, req, res, next);

    expect(next).not.toHaveBeenCalled();
    expect(req.log.error).toHaveBeenCalledWith(error);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(mockJson).toHaveBeenCalledWith({
      error: "Error",
      message: { error: "Not Found", message: "Not Found", statusCode: 404 },
      statusCode: 404,
    });
  });

  it("should return correct status code and message for non-Boom errors", () => {
    const { mockJson, res, req, next } = setup();
    const error = new Error("uh-oh");
    error.statusCode = 503;

    errorHandler(error, req, res, next);

    expect(next).not.toHaveBeenCalled();
    expect(req.log.error).toHaveBeenCalledWith(error);
    expect(res.status).toHaveBeenCalledWith(503);
    expect(mockJson).toHaveBeenCalledWith({
      error: "Error",
      message: "uh-oh",
      statusCode: 503,
    });
  });

  it("should not send response if headers are already sent", () => {
    const { mockJson, res, req, next } = setup();
    const error = new Error("uh-oh");
    error.statusCode = 503;
    res.headersSent = true;

    errorHandler(error, req, res, next);

    expect(next).toHaveBeenCalledWith(error);
    expect(req.log.error).not.toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(mockJson).not.toHaveBeenCalled();
  });
});
