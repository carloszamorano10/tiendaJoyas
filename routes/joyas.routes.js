import { router } from "express"
import { getAllJoyasLimit } from "../src/controllers/joyasControllers"

const router = router()

router.get("/joyas_limit", getAllJoyasLimit)

export default router