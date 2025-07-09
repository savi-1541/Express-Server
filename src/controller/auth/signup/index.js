import * as utils from "../../../utils/index.js";
import service from "../../../service/index.js";
import helper from "../../../helper/index.js";

export const createAccount = async (req, res, next) => {
  try {
    utils.logger.info(`In Create Account Controller`);

    const payload = req.body;

    utils.logger.info(`Entering service for user creation`);
    const userData = await service.authService.createUser(payload);

    utils.logger.info(`User Created Successfully, now generating token`);
    const token = helper.generateToken({
      _id: userData._id,
      name: userData.name,
      isAuthor: payload.isAuthor,
    });

    utils.logger.info(`Token generated successfully sending response`);
    return res.status(201).json({
      statusCode: 201,
      message: "User Onboarded successfully",
      userData,
      token,
    });
  } catch (err) {
    utils.logger.error(`Error in Create account controller ${err.message}`);
    next(err);
  }
};
