import Random from "../models/Random.js"

export const getAllRandoms = async (req, res) => {
  const randoms = await Random.find()
  res.json(randoms)
}

export const getRandom = async (req, res) => {
  const { id } = req.params
  const random = await Random.findById(id)

  if (random) {
    res.json(random)
  }
  else {
    res.json({ message: "Document not found" })
  }
}

export const createRandom = async (req, res) => {
  const random = await Random.create(req.body)
  res.json(random)
}

export const updateRandom = async (req, res) => {
  const { id } = req.params
  const random = await Random.findByIdAndUpdate(id, req.body)

  if (random) {
    res.json(random)
  }
  else {
    res.json({ message: "Document not found" })
  }
}

export const deleteRandom = async (req, res) => {

}