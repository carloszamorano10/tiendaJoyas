import { limitJoyasModel } from "../models/joyasModels"

export const getAllJoyasLimit = async (req, res)=>{
    try {
        const {limits} = req.query
        const result = await limitJoyasModel(limits)
        res.status(200).json({ joyas: result })
    } catch (error) {
        res.status(500).json({error:"Error al procesar la solicitud"})
        console.error("error==>", error)
    }
}