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
const router = express.Router();

router.get("/", getIndexPage);
router.get("/about", getAboutPage);
router.get("/contact", getContactPage);
router.get("/furnitures", getFurnituresPage);
router.get("/blog", getBlogPage);
router.get("/login", getLoginPage);
router.get("/register", getRegisterPage);

export default router;
