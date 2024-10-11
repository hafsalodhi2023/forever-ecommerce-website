import jwt from "jsonwebtoken";
import debug from "debug";

const debugging = debug("development:middleware:adminAuth");

const adminAuth = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized Login Again.xxx",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.id !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized Login Again.",
      });
    }
    next();
  } catch (error) {
    debugging(error);
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export default adminAuth;
