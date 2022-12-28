import express from "express";
const router = express.Router();
import {
  createProduct,
  getAllProducts,
  getProduct,
} from "../controllers/productController.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
router.post("/", roleMiddleware(["admin"]), createProduct);
router.get("/", getAllProducts);
router.get("/:slug", getProduct);

export default router;
