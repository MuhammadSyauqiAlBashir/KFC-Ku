import jwt from "jsonwebtoken"

const secret = process.env.JWT_SECRET as string
export class Tokenjwt {
  static genToken(payload: object) {
    return jwt.sign(payload, secret);
  }
  static verify(token: string) {
    return jwt.verify(token, secret);
  }
}
