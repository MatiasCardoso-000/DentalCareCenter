import jwt from "jsonwebtoken";

export const createToken = (payload: any) => {
return jwt.sign(
  { payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
  "secret"
);
};
