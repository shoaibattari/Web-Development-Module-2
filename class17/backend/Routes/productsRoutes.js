import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Products Home Page");
});

router.post("/add", (req, res) => {
  const newProduct = req.body;
  // Here you would typically add the product to your database
  res.status(201).send(`Product added: ${JSON.stringify(newProduct)}`);
});

export default router;
