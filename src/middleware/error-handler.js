import * as utils from "../utils/index.js";

export const expressErrorHandler = (err, req, res, next) => {
  let errorResponse = {
    error: err.message,
  };

  if (err.errors) {
    errorResponse = {
      statusCode: err.status,
      message: err.message ?? "Bad Request",
    };
  } else {
    errorResponse = {
      error: err.message,
      ...utils.errorHandler(err.message),
    };
  }
  res.status(errorResponse?.statusCode || 500).json(errorResponse);
  next();
};
