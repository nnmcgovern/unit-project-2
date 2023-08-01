import mongoose from "mongoose"
const connnectionString = process.env.DB_URL || "mongodb://127.0.0.1:27017/randomDataAPI"

mongoose.set("returnOriginal", false)

mongoose.connect(connnectionString)
  .catch((err) => {
    console.log(`Error connecting to MongoDB: ${err.message}`)
  });

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB")
})

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB")
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`)
});

export default mongoose.connection;