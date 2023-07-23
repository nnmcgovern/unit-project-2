import db from "../db/connection.js"
import data from "./randomData.json" assert {type: "json"}
import Random from "../models/Random.js"

const insertData = async () => {
  await db.dropDatabase()
  console.log("Database dropped")

  await Random.create(data)
  console.log("Data created")

  await db.close()
}

insertData()