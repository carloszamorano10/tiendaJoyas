import express from "express";
import { getAllJoyasLimit } from "../src/controllers/joyasControllers.js";

const router = express.Router();

router.get("/joyas_limit", getAllJoyasLimit);

export default router;
