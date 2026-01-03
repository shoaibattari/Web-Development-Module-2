import openion from "../models/opinionModel.js";

export const getOpen = async (req, res) => {
  const openions = await openion.find().sort({
    created: -1,
  });
  res.json(openions);
  console.log("get open");
};

export const addOpen = async (req, res) => {
  try {
    const { text } = req.body;
    console.log("add open");
  } catch (error) {
    console.log(error);
  }

  // ai actions
  // any ai model use and openai compilitation use and call api then get responce and show data
};
