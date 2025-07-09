import * as utils from "../../../utils/index.js";
import service from "../../../service/index.js";

export const updateUserInfo = async (req, res, next) => {
  try {
    utils.logger.info(`In Update User Info Controller`);

    const { id } = req.params;
    const payload = req.body;

    utils.logger.info(`Entering service to update user info`);
    await service.userService.updateUserInfo(id, payload);

    utils.logger.info(`User info updated successfully returning response`);
    return res.status(200).json({
      statusCode: 200,
      message: "User info updated successfully",
    });
  } catch (err) {
    utils.logger.error(`Error in  Updating user details ${err.message}`);
    next(err);
  }
};
