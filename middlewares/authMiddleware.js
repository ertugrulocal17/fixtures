import User from "../models/User.js";

export const authMiddleware = (req, res, next) => {
  User.findById(req.session.userId, (err, user) => {
    if (err || !user) res.redirect("/login");
    next();
  });
};
