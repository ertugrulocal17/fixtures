import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import pageRoute from "./routes/pageRoute.js";
import productRoute from "./routes/productRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import userRoute from "./routes/userRoute.js";
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

// Global Variables
global.userIN = null;

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "ecommerce_app",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);
app.use("*", (req, res, next) => {
  userIN = req.session.userId;
  next();
});
// Static Files
app.use(express.static("public"));

// Routes
app.use("/", pageRoute);
app.use("/products", productRoute);
app.use("/category", categoryRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
