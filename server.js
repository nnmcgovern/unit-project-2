import db from "./db/connection.js"
import express from "express"
import randomRoutes from "./routes/randoms.js"

const app = express()
const PORT = process.env.PORT || 3030

app.use(express.json())
app.use("/api", randomRoutes)

db.on("connected", () => {
  app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`)
  })
})