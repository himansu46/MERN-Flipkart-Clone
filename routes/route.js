import express from "express";
import {
  getProducts,
  getProductById,
} from "../controller/productController.js";
import { usersignup, userLogIn } from "../controller/userController.js";
const router = express.Router();

router.post("/signup", usersignup);
router.post("/login", userLogIn);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

export default router;
