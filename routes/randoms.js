import { Router } from "express"
import * as controllers from "../controllers/randoms.js"

const router = Router()
router.get("/", controllers.getAllRandoms)
export default router