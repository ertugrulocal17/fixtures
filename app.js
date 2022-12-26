import express from "express";
import pageRoute from "./routes/pageRoute.js";
import productRoute from "./routes/productRoute.js";
import dotenv from "dotenv";
dotenv.config();
import ejs from "ejs";
import mongoose from "mongoose";
const app = express();
const PORT = 3000;

// Database Connection
mongoose.set("strictQuery", false);

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Database Connected");
});
// Temaplate Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static("public"));

// Routes
app.use("/", pageRoute);
app.use("/products", productRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
