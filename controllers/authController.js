import User from "../models/User.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
  const user = await User.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          req.session.userId = user._id;
          res.status(200).redirect("/");
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

export const logout = (req, res) => {
  req.session.destroy(() => res.redirect("/"));
};
