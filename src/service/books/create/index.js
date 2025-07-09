import models from "../../../schema/index.js";
import * as utils from "../../../utils/index.js";

export const addBooks = async (payload) => {
  const createResponse = await models.books.insertOne(payload);

  if (!createResponse) throw new Error(utils.ERR_MESSAGE_CODES.CREATION_FAILED);
};
