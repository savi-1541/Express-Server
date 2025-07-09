import models from "../../../schema/index.js";

export const listAuthor = async (query) => {
  const authorList = await models.authors.find(
    {
      ...query,
    },
    {
      password: 0,
      __v: 0,
    },
  );

  return authorList;
};
