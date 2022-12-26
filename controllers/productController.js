import Product from "../models/Product.js";
import Category from "../models/Category.js";
export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

export const getAllProducts = async (req, res) => {
  const categorySlug = req.query.categories;
  const category = await Category.findOne({ slug: categorySlug });

  let filter = {};
  if (categorySlug) {
    filter = { category: category._id };
  }
  const products = await Product.find(filter);
  const categories = await Category.find();
  try {
    res.status(200).render("products", {
      page_name: "products",
      categories,
      products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

export const getProduct = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  try {
    res.status(200).render("product", {
      page_name: "product",
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
