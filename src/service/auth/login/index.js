import models from "../../../schema/index.js";
import helper from "../../../helper/index.js";
import * as utils from "../../../utils/index.js";

export const validateUser = async (payload) => {
  let model;
  if (payload.isAuthor) {
    model = models.authors;
  } else {
    model = models.users;
  }

  const userInfo = await model.findOne({
    $or: [
      {
        email: payload.userName,
      },
      {
        phone: payload.userName,
      },
    ],
  });

  if (!userInfo) throw new Error(utils.ERR_MESSAGE_CODES.INVALID_USER_NAME);

  const isValidPassword = await helper.verifyPassword(
    payload.password,
    userInfo.password,
  );

  if (!isValidPassword)
    throw new Error(utils.ERR_MESSAGE_CODES.INVALID_USER_NAME);

  delete userInfo._doc.password;
  return userInfo;
};
