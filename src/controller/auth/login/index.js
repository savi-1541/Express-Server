import * as utils from "../../../utils/index.js";
import service from "../../../service/index.js";
import helper from "../../../helper/index.js";

export const login = async (req, res, next) => {
  try {
    utils.logger.info(`In Login Controller`);

    const payload = req.body;

    utils.logger.info(`Entering service for User Validation`);
    const userData = await service.authService.validateUser(payload);

    utils.logger.info(`User Validated Successfully, now generating token`);
    const token = helper.generateToken({
      _id: userData._id,
      name: userData.name,
      isAuthor: payload.isAuthor,
    });

    utils.logger.info(`Token generated successfully sending response`);
    return res.status(200).json({
      statusCode: 200,
      message: "User Logged in successfully",
      userData,
      token,
    });
  } catch (err) {
    utils.logger.error(`Error in  Account Login controller ${err.message}`);
    next(err);
  }
};
