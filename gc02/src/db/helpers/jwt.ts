const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

class Tokenjwt {
  static genToken(payload: object) {
    return jwt.sign(payload, secret);
  }
  static verify(token: string) {
    return jwt.verify(token, secret);
  }
}

module.exports = Tokenjwt;
