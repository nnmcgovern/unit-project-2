import mongoose from "mongoose"

const Random = new mongoose.Schema({
  _id: String,
  index: Number,
  guid: String,
  isActive: Boolean,
  balance: String,
  picture: String,
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  company: String,
  email: String,
  phone: String,
  address: String,
  about: String,
  registered: String,
  latitude: Number,
  longitude: Number,
  tags: [String],
  friends: [{
    id: Number,
    name: String
  }],
  greeting: String,
  favoriteFruit: String
})

export default mongoose.model("randoms", Random)