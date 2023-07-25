import { Router } from "express"
import randomRoutes from "./randoms.js"

const router = Router()

router.get("/", (req, res) => {
  res.json({
    whereAmI: "The API root",
    message: "For full CRUD functionality, make requests to baseURL",
    baseURL: "https://random-data-api-50875b874049.herokuapp.com/api"
  })
})

router.use("/api", randomRoutes)

export default router