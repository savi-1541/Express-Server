import models from "../../../schema/index.js";
import * as utils from "../../../utils/index.js";

export const listBooks = async (query, loggedInAuthor) => {
  if (loggedInAuthor && query.authorId && loggedInAuthor !== query.authorId)
    throw new Error(utils.ERR_MESSAGE_CODES.ACCESS_DENIED);

  const booksList = await models.books.find(
    {
      ...query,
    },
    {
      __v: 0,
    },
  );

  return booksList;
};
