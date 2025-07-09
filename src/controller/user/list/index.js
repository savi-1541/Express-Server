import * as utils from "../../../utils/index.js";
import service from "../../../service/index.js";

export const listUser = async (req, res, next) => {
  try {
    utils.logger.info(`In List User Controller`);

    const query = req.query;

    utils.logger.info(`Entering service to fetch users list`);
    const userList = await service.userService.listUser(query);

    utils.logger.info(`User list fetched successfully returning response`);
    return res.status(200).json({
      statusCode: 200,
      message: "User fetched successfully",
      userList,
    });
  } catch (err) {
    utils.logger.error(`Error in  Fetching user list ${err.message}`);
    next(err);
  }
};
