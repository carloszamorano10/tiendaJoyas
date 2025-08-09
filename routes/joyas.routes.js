import express from "express";
import { getAllJoyasLimit, getOrderAndLimitJoyas, getPaginatedJoyas, joyasFiltros } from "../src/controllers/joyasControllers.js";

const router = express.Router();

router.get("/joyas_limit", getAllJoyasLimit);
router.get("/joyas_limit_orderby", getOrderAndLimitJoyas);
router.get("/joyas_paginated", getPaginatedJoyas);
router.get("/joyas_filter", joyasFiltros);

export default router;
