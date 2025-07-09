import helper from "../helper/index.js";
import * as utils from "../utils/index.js";

export const authenticator = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization;

    if (accessToken) {
      const decoded = helper.verifyToken(accessToken);

      req.user = decoded;
      if (decoded.isAuthor) {
        req.user.role = "author";
      } else {
        req.user.role = "user";
      }
      utils.logger.info(`decoded data ${JSON.stringify(decoded)}`);
    } else {
      utils.logger.error(`Token is Missing in headers`);
      throw new Error(utils.ERR_MESSAGE_CODES.TOKEN_MISSING);
    }
    next();
  } catch (error) {
    utils.logger.error(`Unable to authenticate token ${error}`);
    if (error.message == "jwt expired") {
      error.message = utils.ERR_MESSAGE_CODES.INVALID_TOKEN;
    }
    next(error);
  }
};

export const checkAccess = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      if (!req.user || !allowedRoles.includes(req.user.role)) {
        throw new Error(utils.ERR_MESSAGE_CODES.ACCESS_DENIED);
      }
      next();
    } catch (err) {
      utils.logger.error(`Unable to authenticate token ${err}`);
      next(err);
    }
  };
};
