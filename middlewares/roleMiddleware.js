export const roleMiddleware = role => (req, res, next) => {
  const userRole = req.body.role;
  if (role.includes(userRole)) next();
  else {
    res.status(401).send("Unauthorized");
  }
};
