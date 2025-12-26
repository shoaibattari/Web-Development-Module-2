import express from "express";
import productsRoutes from "./productsRoutes.js";
const router = express.Router();

// Example route
router.use("/product", productsRoutes);

export default router;
