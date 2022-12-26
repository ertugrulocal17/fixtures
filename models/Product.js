import mongoose from "mongoose";
import slugify from "slugify";
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  slug: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //   category: {
  //     type: Schema.Types.ObjectId,
  //     ref: "Category",
  //   },
  //   user: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
});

ProductSchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
