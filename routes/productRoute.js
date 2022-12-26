import express from "express";
const router = express.Router();
import {
  createProduct,
  getAllProducts,
  getProduct,
} from "../controllers/productController.js";

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:slug", getProduct);

export default router;
