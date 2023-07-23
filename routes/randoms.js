import { Router } from "express"
import * as controllers from "../controllers/randoms.js"

const router = Router()

router.get("/", controllers.getRandoms)
router.get("/:id", controllers.getRandomById)
router.post("/", controllers.createRandom)
router.put("/", controllers.updateRandoms)
router.put("/:id", controllers.updateRandomById)
router.delete("/:id", controllers.deleteRandom)

export default router