// Packages
import * as jwt from "jsonwebtoken";

/**
 * TODO JWt Signator
 * @param {object} data
 */
export const signator = (data) => {
  return jwt.sign(
    data,
    process.env.SECRET_KEY_JWT,
    { expiresIn: "1d" },
    { algorithm: "RS256" }
  );
};

/**
 * TODO JWt Signator
 * @param {object} data
 */
export const verify = (data) => {
  return jwt.verify(data, process.env.SECRET_KEY_JWT, (err, decode) => {
    return err ? false : decode;
  });
};
