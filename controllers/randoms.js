import Random from "../models/Random.js"

export const getRandoms = async (req, res) => {
  // no query parameters, responds with all docs
  if (!Object.keys(req.query).length) {
    const randoms = await Random.find()
    res.json(randoms)
  }
  // with query parameters
  else {
    const keys = Object.keys(req.query)
    const arr = []

    keys.forEach(async key => {
      arr.push({ [`${key}`]: req.query[key] })
    })

    const randoms = await Random.find({ $and: [...arr] })

    if (randoms.length) {
      res.json(randoms)
    }
    else {
      res.json({ message: "Document(s) not found" })
    }
  }
}

export const getRandomById = async (req, res) => {
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

export const updateRandoms = async (req, res) => {
  const keys = Object.keys(req.query)
  const arr = []

  keys.forEach(key => {
    arr.push({ [`${key}`]: req.query[key] })
  })

  const randoms = await Random.updateMany({ $and: [...arr] }, req.body)

  if (randoms.modifiedCount) {
    res.json({ message: `${randoms.modifiedCount} document(s) updated` })
  }
  else {
    res.json({ message: "Document(s) not found" })
  }
}

export const updateRandomById = async (req, res) => {
  const { id } = req.params
  const random = await Random.findByIdAndUpdate(id, req.body)

  if (random) {
    res.json(random)
  }
  else {
    res.json({ message: "Document not found" })
  }
}

export const deleteRandoms = async (req, res) => {
  const keys = Object.keys(req.query)
  const arr = []

  keys.forEach(key => {
    arr.push({ [`${key}`]: req.query[key] })
  })

  const randoms = await Random.deleteMany({ $and: [...arr] })

  if (randoms.deletedCount) {
    res.json({ message: `${randoms.deletedCount} document(s) deleted` })
  }
  else {
    res.json({ message: "Document(s) not found" })
  }
}

export const deleteRandomById = async (req, res) => {
  const { id } = req.params
  const random = await Random.findByIdAndDelete(id)

  if (random) {
    res.json({ message: "Document deleted" })
  }
  else {
    res.json({ message: "Document not found" })
  }
}