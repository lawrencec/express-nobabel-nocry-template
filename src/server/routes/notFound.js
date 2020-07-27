import boom from "@hapi/boom";

export default (req, res) => {
  const error = boom.notFound("Unknown uri");

  return res.status(error.output.statusCode).json(error.output.payload);
};
