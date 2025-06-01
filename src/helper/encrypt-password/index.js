import bcrypt from "bcrypt";

export const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
};

export const verifyPassword = async (password, hash) =>
  await bcrypt.compare(password, hash);
