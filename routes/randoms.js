import { Router } from "express"
import * as controllers from "../controllers/randoms.js"

const router = Router()

router.get("/", controllers.getRandoms)
router.get("/:id", controllers.getRandom)
router.post("/", controllers.createRandom)
router.put("/:id", controllers.updateRandom)
router.delete("/:id", controllers.deleteRandom)

export default router