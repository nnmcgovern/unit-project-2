import db from "./db/connection.js"
import express from "express"
import routes from "./routes/index.js"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3030

app.use(express.json())
app.use(cors())
app.use("/", routes)

db.on("connected", () => {
  app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`)
  })
})