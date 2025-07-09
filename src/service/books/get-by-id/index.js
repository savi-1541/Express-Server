import models from "../../../schema/index.js";
import * as utils from "../../../utils/index.js";

export const fetchBookInfo = async (id) => {
  const bookInfo = await models.books.findOne(
    {
      _id: id,
    },
    {
      __v: 0,
    },
  );

  if (!bookInfo) throw new Error(utils.ERR_MESSAGE_CODES.DATA_NOT_FOUND);

  return bookInfo;
};
