import express from "express";
import {
  getDashboardPage,
  register,
  login,
  logout,
} from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/dashboard", authMiddleware, getDashboardPage);

export default router;
