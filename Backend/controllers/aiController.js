require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

const generateContent = async (req, res) => {
  try {
    const prompt = "Give me 20 random movies recommandation separated with ','";
    const { response } = await model.generateContent(prompt);
    const text = response.text();
    res.json({ text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  generateContent,
};
