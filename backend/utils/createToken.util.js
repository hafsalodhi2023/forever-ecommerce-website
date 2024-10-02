import jwt from "jsonwebtoken";

export default function createToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}
