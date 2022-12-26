import express from "express";
import {
  getIndexPage,
  getAboutPage,
  getContactPage,
  getFurnituresPage,
  getBlogPage,
} from "../controllers/pageController.js";
const router = express.Router();

router.get("/", getIndexPage);
router.get("/about", getAboutPage);
router.get("/contact", getContactPage);
router.get("/furnitures", getFurnituresPage);
router.get("/blog", getBlogPage);

export default router;
