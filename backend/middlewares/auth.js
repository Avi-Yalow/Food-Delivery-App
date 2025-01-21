import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized. Login again" });
  }
  try {
    const parseToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = parseToken.id;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error" });
  }
};

export default authMiddleware;
