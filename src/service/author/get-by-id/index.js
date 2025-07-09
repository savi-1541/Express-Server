import models from "../../../schema/index.js";
import * as utils from "../../../utils/index.js";

export const fetchAuthorInfo = async (id) => {
  const authorInfo = await models.authors.findOne(
    {
      _id: id,
    },
    {
      password: 0,
      __v: 0,
    },
  );

  if (!authorInfo) throw new Error(utils.ERR_MESSAGE_CODES.DATA_NOT_FOUND);

  return authorInfo;
};
