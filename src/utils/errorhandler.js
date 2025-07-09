export const ERR_MESSAGE_CODES = {
  INTENRAL_SERVER_ERROR: "INTENRAL_SERVER_ERROR",
  BAD_REQUEST: "BAD_REQUEST",
  DATA_NOT_FOUND: "DATA_NOT_FOUND",
  DUPLICATE_USER: "DUPLICATE_USER",
  INVALID_USER_NAME: "INVALID_USER_NAME",
  INCORRECT_PASSWORD: "INCORRECT_PASSWORD",
  UPDATE_FAILED: "UPDATE_FAILED",
  INVALID_TOKEN: "INVALID_TOKEN",
  TOKEN_MISSING: "TOKEN_MISSING",
  ACCESS_DENIED: "ACCESS_DENIED",
  CREATION_FAILED: "CREATION_FAILED",
};

export const errorHandler = (errCode) => {
  const errMessage = {
    statusCode: 500,
    status: "Error",
    message: "Internal Server Error",
  };

  switch (errCode) {
    case ERR_MESSAGE_CODES.DATA_NOT_FOUND:
      errMessage.statusCode = 404;
      errMessage.message = "No Data Found";
      break;
    case ERR_MESSAGE_CODES.DUPLICATE_USER:
      errMessage.statusCode = 400;
      errMessage.message = "User Already Exists with this email and phone";
      break;
    case ERR_MESSAGE_CODES.INVALID_USER_NAME:
      errMessage.statusCode = 401;
      errMessage.message = "Incorrect username";
      break;
    case ERR_MESSAGE_CODES.INCORRECT_PASSWORD:
      errMessage.statusCode = 400;
      errMessage.message = "Invalid Password";
      break;
    case ERR_MESSAGE_CODES.UPDATE_FAILED:
      errMessage.statusCode = 400;
      errMessage.message = "Failed to update, something went wrong!";
      break;
    case ERR_MESSAGE_CODES.TOKEN_MISSING:
      errMessage.statusCode = 401;
      errMessage.message = "Authorization Header Missing";
      break;
    case ERR_MESSAGE_CODES.INVALID_TOKEN:
      errMessage.statusCode = 401;
      errMessage.message = "UnAuthorised User";
      break;
    case ERR_MESSAGE_CODES.ACCESS_DENIED:
      errMessage.statusCode = 403;
      errMessage.message = "Access Denied";
      break;
    case ERR_MESSAGE_CODES.CREATION_FAILED:
      errMessage.statusCode = 400;
      errMessage.message = "Failed to add data";
      break;
    default:
    case ERR_MESSAGE_CODES.INTENRAL_SERVER_ERROR:
      break;
  }

  return errMessage;
};
