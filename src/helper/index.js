import { encryptPassword, verifyPassword } from "./encrypt-password/index.js";
import { verifyToken, generateToken } from "./jwt/index.js";

export default {
  encryptPassword,
  verifyPassword,
  verifyToken,
  generateToken,
};
