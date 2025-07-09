import * as utils from "../../../utils/index.js";
import service from "../../../service/index.js";

export const fetchUserInfo = async (req, res, next) => {
  try {
    utils.logger.info(`In Fetch User Info Controller`);

    const { id } = req.params;

    utils.logger.info(`Entering service to fetch user info`);
    const userInfo = await service.userService.fetchUserInfo(id);

    utils.logger.info(`User info fetched successfully returning response`);
    return res.status(200).json({
      statusCode: 200,
      message: "User info fetched successfully",
      userInfo,
    });
  } catch (err) {
    utils.logger.error(`Error in  Fetching user details ${err.message}`);
    next(err);
  }
};
