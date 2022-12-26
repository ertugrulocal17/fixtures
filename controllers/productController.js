import Product from "../models/Product.js";

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
  const products = await Product.find();

  try {
    res.status(200).render("products", {
      page_name: "products",
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
