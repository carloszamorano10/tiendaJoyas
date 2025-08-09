import pool from "../../db/config.js"

export const limitJoyasModel = async (limit = 2)=>{
 const sqlQuery= {
    text:"SELECT * FROM inventario ORDER BY id DESC LIMIT $1",
    values: [limit]
 }
 const result = await pool.query(sqlQuery)
 return result.rows
}