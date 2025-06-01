import models from "../../../schema/index.js";
import helper from "../../../helper/index.js";
import * as utils from "../../../utils/index.js";

export const createUser = async (payload) => {
  let model;
  if (payload.isAuthor) {
    model = models.authors;
  } else {
    model = models.users;
  }
  const userExists = await model.findOne({
    $or: [
      {
        email: payload.email,
      },
      {
        phone: payload.phone,
      },
    ],
  });

  if (userExists) throw new Error(utils.ERR_MESSAGE_CODES.DUPLICATE_USER);

  const hashedPassword = await helper.encryptPassword(payload.password);
  payload.password = hashedPassword;

  const userDetails = await model.create(payload);
  delete userDetails._doc.password;

  return userDetails;
};
