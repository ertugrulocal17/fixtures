import Category from "../models/Category.js";
export const createCategory = async (req, res) => {
  const category = await Category.create(req.body);

  try {
    res.status(201).json({
      success: true,
      category,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
