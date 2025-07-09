import models from "../../../schema/index.js";

export const listUser = async (query) => {
  const userList = await models.users.find(
    {
      ...query,
    },
    {
      password: 0,
      __v: 0,
    },
  );

  return userList;
};
