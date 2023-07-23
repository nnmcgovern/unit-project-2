import { Router } from "express"
import * as controllers from "../controllers/randoms.js"

const router = Router()

router.get("/", controllers.getAllRandoms)
router.get("/:id", controllers.getRandom)
router.post("/", controllers.createRandom)
router.put("/:id", controllers.updateRandom)

export default router