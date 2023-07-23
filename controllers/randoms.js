import Random from "../models/Random.js"

export const getRandoms = async (req, res) => {
  if (!Object.keys(req.query).length) {
    const randoms = await Random.find()
    res.json(randoms)
  }
  else {
    const keys = Object.keys(req.query)

    if (keys.length > 1) {
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
    else {
      keys.forEach(async key => {
        const random = await Random.find({ [`${key}`]: req.query[key] })

        if (random.length) {
          res.json(random)
        }
        else {
          res.json({ message: "Document(s) not found" })
        }
      })
    }

  }
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
  const { id } = req.params
  const random = await Random.findByIdAndDelete(id)

  if (random) {
    res.json({ message: "Document deleted" })
  }
  else {
    res.json({ message: "Document not found" })
  }
}