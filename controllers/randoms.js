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

    // multiple query parameters
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
    // one query paramter
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

  // multiple query parameters
  if (keys.length > 1) {
    const arr = []

    keys.forEach(async key => {
      arr.push({ [`${key}`]: req.query[key] })
    })

    const randoms = await Random.updateMany({ $and: [...arr] }, req.body)

    if (randoms) {
      res.json(randoms)
    }
    else {
      res.json({ message: "Document(s) not found" })
    }
  }
  // one query paramter
  else {
    keys.forEach(async key => {
      const random = await Random.updateMany({ [`${key}`]: req.query[key] }, req.body)

      if (random) {
        res.json(random)
      }
      else {
        res.json({ message: "Document(s) not found" })
      }
    })
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