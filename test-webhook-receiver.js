// Test webhook receiver - Example for your main backend server
const express = require("express");

const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());

// Webhook endpoint to receive health data
app.post("/webhook", (req, res) => {
  const healthData = req.body;

  console.log("\n🏥 RECEIVED HEALTH DATA:");
  console.log("=====================================");
  console.log("Timestamp:", healthData.timestamp);
  console.log("Type:", healthData.type);

  if (healthData.data) {
    console.log("\n📊 Data Summary:");
    console.log(`- Health Concerns: ${healthData.data.concerns?.length || 0}`);
    console.log(`- News Items: ${healthData.data.news?.length || 0}`);
    console.log(
      `- Disease Outbreaks: ${healthData.data.outbreaks?.length || 0}`
    );
    console.log(
      `- Daily Trivia: ${healthData.data.dailyTrivia ? "Yes" : "No"}`
    );

    // Log specific data for demonstration
    if (healthData.data.concerns?.length > 0) {
      console.log("\n🚨 Health Concerns:");
      healthData.data.concerns.forEach((concern) => {
        console.log(`  - ${concern.title} (${concern.severity} severity)`);
      });
    }

    if (healthData.data.news?.length > 0) {
      console.log("\n📰 News Updates:");
      healthData.data.news.forEach((news) => {
        console.log(`  - ${news.headline}`);
      });
    }

    if (healthData.data.outbreaks?.length > 0) {
      console.log("\n🦠 Disease Outbreaks:");
      healthData.data.outbreaks.forEach((outbreak) => {
        console.log(
          `  - ${outbreak.disease} in ${outbreak.location} (${outbreak.casesReported} cases)`
        );
      });
    }

    if (healthData.data.dailyTrivia) {
      console.log("\n🧠 Daily Trivia:");
      console.log(`  Q: ${healthData.data.dailyTrivia.question}`);
    }
  }

  console.log("=====================================\n");

  // Respond with success
  res.status(200).json({
    received: true,
    timestamp: new Date().toISOString(),
    message: "Health data received successfully",
  });
});

// Health check for the webhook receiver
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "webhook-receiver",
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    name: "Test Webhook Receiver",
    description:
      "Example endpoint for receiving health data from the mock server",
    endpoints: {
      "POST /webhook": "Receive health data",
      "GET /health": "Health check",
    },
  });
});

app.listen(PORT, () => {
  console.log(`🎯 Test webhook receiver running on port ${PORT}`);
  console.log(`📍 Webhook endpoint: http://localhost:${PORT}/webhook`);
  console.log(
    `\nThis is an example of how your main backend server should handle the webhook data.\n`
  );
});

module.exports = app;
