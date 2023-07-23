import Random from "../models/Random.js"

export const getAllRandoms = async (req, res) => {
  const randoms = await Random.find()
  res.json(randoms)

  // try {
  //   const randoms = Random.find({})
  //   res.json(randoms)
  // }
  // catch (error) {
  //   console.log(error);
  //   res.status(500).json({ error: error.message });
  // }
}

// export const getRandom = async (req, res) => {

// }

// export const createRandom = async (req, res) => {

// }

// export const updateRandom = async (req, res) => {

// }

// export const deleteRandom = async (req, res) => {

// }