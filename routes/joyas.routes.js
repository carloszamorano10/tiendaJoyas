import express from "express";
import {
  getAllJoyasLimit,
  getOrderAndLimitJoyas,
  getPaginatedJoyas,
  joyasFiltros,
  joyasHateoas,
} from "../src/controllers/joyasControllers.js";

const router = express.Router();

router.get("/joyas_limit", getAllJoyasLimit);
router.get("/joyas_limit_orderby", getOrderAndLimitJoyas);
router.get("/joyas_paginated", getPaginatedJoyas);
router.get("/joyas_filter", joyasFiltros);

//ruta HATEOAS
router.get("/joyas", joyasHateoas);

export default router;
