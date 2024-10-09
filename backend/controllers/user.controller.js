import userModel from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import createToken from "../utils/createToken.util.js";
import debug from "debug";

// Creating debugger
const debugging = debug("development:controller:user");

// Route for user signIn
const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Please sign up first." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      return res
        .status(200)
        .json({ success: true, message: "Logged in successfully.", token });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials." });
    }
  } catch (error) {
    debugging(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route for user signUp
const signUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Checking user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res
        .status(400)
        .json({ success: false, message: "User already registered." });
    }

    // Validating email format & strong password
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter a valid email." });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter a strong password." });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    return res.status(201).json({
      success: true,
      message: "User created successfully!",
      token,
    });
  } catch (error) {
    debugging(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route for user admin signIn
const signInAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = createToken(email + password);
      return res
        .status(200)
        .json({ success: true, message: "Logged in successfully.", token });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials." });
    }
  } catch (error) {
    debugging(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { signInUser, signUpUser, signInAdmin };
