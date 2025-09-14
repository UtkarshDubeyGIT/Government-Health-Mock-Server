const { generateHealthPayload } = require("../mockData");

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    const sampleData = generateHealthPayload();
    res.json(sampleData);
  } catch (error) {
    console.error("Error generating sample data:", error);
    res.status(500).json({
      error: "Failed to generate sample data",
      message: error.message,
    });
  }
}
