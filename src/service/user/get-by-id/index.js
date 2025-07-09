import models from "../../../schema/index.js";
import * as utils from "../../../utils/index.js";

export const fetchUserInfo = async (id) => {
  const userInfo = await models.users.findOne(
    {
      _id: id,
    },
    {
      password: 0,
      __v: 0,
    },
  );

  if (!userInfo) throw new Error(utils.ERR_MESSAGE_CODES.DATA_NOT_FOUND);

  return userInfo;
};
