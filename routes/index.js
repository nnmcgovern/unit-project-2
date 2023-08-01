import { Router } from "express"
import randomRoutes from "./randoms.js"

const router = Router()

router.get("/", (req, res) => {
  res.json({
    whereAmI: "The API root",
    message: "For full CRUD functionality, make requests to the /api endpoint"
  })
})

router.use("/api", randomRoutes)

export default router