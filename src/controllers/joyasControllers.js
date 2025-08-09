import HATEOAS from "../helpers/hateoas.js";
import {
  getJoyasFiltradasModel,
  getPaginatedJoyasModel,
  joyaHateoasModel,
  limitFormatJoyas,
  limitJoyasModel,
} from "../models/joyasModels.js";

export const getAllJoyasLimit = async (req, res) => {
  try {
    const { limits } = req.query;
    const result = await limitJoyasModel(limits);
    res.status(200).json({ joyas: result });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("error==>", error);
  }
};

export const getOrderAndLimitJoyas = async (req, res) => {
  try {
    const { order_by, limit } = req.query;
    const joyas = await limitFormatJoyas(order_by, limit);
    res.status(200).json({ joyas });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("error==>", error);
  }
};

export const getPaginatedJoyas = async (req, res) => {
  try {
    const { order_by, limit, page } = req.query;
    const joyas = await getPaginatedJoyasModel({ order_by, limit, page });
    res.status(200).json({ joyas });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("error==>", error);
  }
};

//con filtros
export const joyasFiltros = async (req, res) => {
  try {
    const filters = req.query;
    const joyas = await getJoyasFiltradasModel(filters);
    res.status(200).json({ joyas });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("error==>", error);
  }
};

//con HAETOEAS
export const joyasHateoas = async (req, res) => {
  try {
    const allJoyas = await joyaHateoasModel();
    const hateoasData = await HATEOAS("joyas", allJoyas);
    res.status(200).json({ joyas: hateoasData });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("error==>", error);
  }
};
