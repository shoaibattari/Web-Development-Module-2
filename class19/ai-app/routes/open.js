import express from "express";
import { addOpen, getOpen } from "../controller/opinion.js";

const router = express.Router();

router.get("/", getOpen);
router.get("/add", addOpen);

export default router;
