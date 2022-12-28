import express from "express";
import {
  getIndexPage,
  getAboutPage,
  getContactPage,
  getFurnituresPage,
  getBlogPage,
  getLoginPage,
  getRegisterPage,
} from "../controllers/pageController.js";
import { redirectMiddleware } from "../middlewares/redirectMiddleware.js";
const router = express.Router();

router.get("/", getIndexPage);
router.get("/about", getAboutPage);
router.get("/contact", getContactPage);
router.get("/furnitures", getFurnituresPage);
router.get("/blog", getBlogPage);
router.get("/login", redirectMiddleware, getLoginPage);
router.get("/register", redirectMiddleware, getRegisterPage);

export default router;
