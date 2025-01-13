import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../models/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
const loginUser = async (req, res) => {
  const { password, email } = req.boby;
  try {
    const user = userModel.findOne(email);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exists" });
    }
    const isMatch = await bycrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid credentials" });
    }
    const token = createToken(user._id);
    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error" });
  }
};
const registerUser = async (req, res) => {
  const { name, password, email } = req.boby;
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res
        .status(401)
        .json({ success: false, message: "User already exists" });
    }

    //validated email format and strong password
    if (!validator.isEmail(email)) {
      return res
        .status(401)
        .json({ success: false, message: "Please enter valid email" });
    }

    if (password.length < 8) {
      return res
        .status(401)
        .json({ success: false, message: "Please enter a strong password" });
    }
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
