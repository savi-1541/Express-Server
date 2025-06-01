import JWT from "jsonwebtoken";

export const generateToken = (data) => {
  const expiresIn = process.env.JWT_EXPIRY_TIME;
  const secret = process.env.JWT_SECRET;

  return JWT.sign(data, secret, {
    expiresIn,
  });
};

export const verifyToken = (token) => {
  const secret = process.env.JWT_SECRET;

  return JWT.verify(token, secret);
};
