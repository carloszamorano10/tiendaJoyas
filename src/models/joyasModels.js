import pool from "../../db/config.js";
import format from "pg-format";

//limitados
export const limitJoyasModel = async (limit = 2) => {
  const sqlQuery = {
    text: "SELECT * FROM inventario ORDER BY id DESC LIMIT $1",
    values: [limit],
  };
  const result = await pool.query(sqlQuery);
  return result.rows;
};

//limitado y ordenado asc o desc
export const limitFormatJoyas = async (order_by = "id_ASC", limit = 2) => {
  const [attribute, direction] = order_by.split("_");
  const formatQuery = format(
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s",
    attribute,
    direction,
    limit
  );

  const response = await pool.query(formatQuery);
  return response.rows;
};

//limitado ordenado y con paginado
export const getPaginatedJoyasModel = async ({
  order_by = "id_ASC",
  limit = 2,
  page = 1,
}) => {
  const [attribute, direction] = order_by.split("_");
  const offset = Number(page - 1) * limit;
  const formatQuery = format(
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
    attribute,
    direction,
    limit,
    offset
  );
  const response = await pool.query(formatQuery);
  return response.rows;
};

//modelo con filtros
export const getJoyasFiltradasModel = async ({
  precio_min,
  precio_max,
  categoria,
  metal
}) => {
  const filtros = [];

  if (precio_min) {
    filtros.push(`precio >= ${precio_min}`);
  }

  if (precio_max) {
    filtros.push(`precio <= ${precio_max}`);
  }

  if (categoria) {
    filtros.push(`categoria = '${categoria}'`);
  }

  if (metal) {
    filtros.push(`metal = '${metal}'`);
  }

  let consulta = "SELECT * FROM inventario ";

  if (filtros.length > 0) {
    consulta += " WHERE " + filtros.join(" AND ");
  }
  console.log(consulta);
  const result = await pool.query(consulta);
  return result.rows;
};
