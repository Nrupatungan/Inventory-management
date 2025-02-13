import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productController";

const router = Router();

router.route("/").get(getProducts);
router.route("/").post(createProduct);

export default router;