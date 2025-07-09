import models from "../../../schema/index.js";
import * as utils from "../../../utils/index.js";

export const updateBookInfo = async (id, payload) => {
  const updateResponse = await models.books.updateOne(
    {
      _id: id,
    },
    {
      ...payload,
    },
  );

  if (!updateResponse.matchedCount)
    throw new Error(utils.ERR_MESSAGE_CODES.DATA_NOT_FOUND);

  if (!updateResponse.modifiedCount)
    throw new Error(utils.ERR_MESSAGE_CODES.UPDATE_FAILED);
};
