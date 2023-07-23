import { Router } from "express"
import * as controllers from "../controllers/randoms.js"

const router = Router()

router.get("/", controllers.getRandoms)
router.get("/:id", controllers.getRandomById)
router.post("/", controllers.createRandom)
router.put("/", controllers.updateRandoms)
router.put("/:id", controllers.updateRandomById)
router.delete("/", controllers.deleteRandoms)
router.delete("/:id", controllers.deleteRandomById)

export default router