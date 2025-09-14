const express = require("express");
const axios = require("axios");
const cron = require("node-cron");
const dotenv = require("dotenv");
const { generateHealthPayload } = require("./mockData");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const WEBHOOK_URL = process.env.WEBHOOK_URL;
const SEND_INTERVAL_MINUTES = process.env.SEND_INTERVAL_MINUTES || 10;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Store for tracking sent data (in a real app, you might use a database)
let sentDataLog = [];
let isServerRunning = true;

// Function to send data to webhook
async function sendToWebhook(data) {
  try {
    if (!WEBHOOK_URL) {
      console.log(
        "⚠️  No webhook URL configured. Data would be sent to:",
        data
      );
      return;
    }

    console.log(`📤 Sending health data to webhook: ${WEBHOOK_URL}`);

    const response = await axios.post(WEBHOOK_URL, data, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Government-Health-Mock-Server/1.0.0",
      },
      timeout: 10000, // 10 second timeout
    });

    console.log("✅ Data sent successfully:", {
      status: response.status,
      timestamp: data.timestamp,
      concerns: data.data.concerns.length,
      news: data.data.news.length,
      outbreaks: data.data.outbreaks.length,
    });

    // Log the sent data
    sentDataLog.push({
      timestamp: new Date().toISOString(),
      status: "success",
      responseStatus: response.status,
      dataId: data.timestamp,
    });

    // Keep only last 100 log entries
    if (sentDataLog.length > 100) {
      sentDataLog = sentDataLog.slice(-100);
    }
  } catch (error) {
    console.error("❌ Error sending to webhook:", {
      message: error.message,
      url: WEBHOOK_URL,
      timestamp: new Date().toISOString(),
    });

    // Log the error
    sentDataLog.push({
      timestamp: new Date().toISOString(),
      status: "error",
      error: error.message,
      dataId: data.timestamp,
    });
  }
}

// Function to generate and send health data
function generateAndSendHealthData() {
  if (!isServerRunning) return;

  console.log(
    `🏥 Generating health data update at ${new Date().toLocaleString()}`
  );
  const healthData = generateHealthPayload();
  sendToWebhook(healthData);
}

// Set up cron job to send data every specified minutes
const cronExpression = `*/${SEND_INTERVAL_MINUTES} * * * *`;
console.log(
  `⏰ Setting up cron job to run every ${SEND_INTERVAL_MINUTES} minutes`
);

const cronJob = cron.schedule(
  cronExpression,
  () => {
    generateAndSendHealthData();
  },
  {
    scheduled: true,
    timezone: "America/New_York",
  }
);

// Track cron job status manually since getStatus() might not be available
let cronJobRunning = true;

// Routes

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    cronJobRunning: cronJobRunning,
    webhookUrl: WEBHOOK_URL ? "configured" : "not configured",
    intervalMinutes: SEND_INTERVAL_MINUTES,
  });
});

// Get current mock data sample
app.get("/api/sample", (req, res) => {
  const sampleData = generateHealthPayload();
  res.json(sampleData);
});

// Get logs of sent data
app.get("/api/logs", (req, res) => {
  res.json({
    totalSent: sentDataLog.length,
    logs: sentDataLog.slice(-20), // Return last 20 entries
    lastUpdate:
      sentDataLog.length > 0
        ? sentDataLog[sentDataLog.length - 1].timestamp
        : null,
  });
});

// Manually trigger data send
app.post("/api/trigger", (req, res) => {
  try {
    generateAndSendHealthData();
    res.json({
      message: "Health data sent manually",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to send data",
      message: error.message,
    });
  }
});

// Update webhook URL
app.post("/api/webhook-url", (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  // In a real app, you'd update the environment variable or database
  process.env.WEBHOOK_URL = url;

  res.json({
    message: "Webhook URL updated successfully",
    newUrl: url,
  });
});

// Start/stop the cron job
app.post("/api/toggle", (req, res) => {
  if (cronJobRunning) {
    cronJob.stop();
    cronJobRunning = false;
    isServerRunning = false;
    res.json({
      message: "Health data sending paused",
      status: "stopped",
    });
  } else {
    cronJob.start();
    cronJobRunning = true;
    isServerRunning = true;
    res.json({
      message: "Health data sending resumed",
      status: "running",
    });
  }
});

// Root endpoint with API documentation
app.get("/", (req, res) => {
  res.json({
    name: "Government Health Mock Server",
    version: "1.0.0",
    description: "Mock server for government health data, news, and alerts",
    endpoints: {
      "GET /": "API documentation",
      "GET /health": "Server health check",
      "GET /api/sample": "Get sample health data",
      "GET /api/logs": "Get transmission logs",
      "POST /api/trigger": "Manually trigger data send",
      "POST /api/webhook-url": "Update webhook URL",
      "POST /api/toggle": "Start/stop automatic sending",
    },
    configuration: {
      webhookUrl: WEBHOOK_URL || "Not configured",
      intervalMinutes: SEND_INTERVAL_MINUTES,
      cronStatus: cronJobRunning ? "running" : "stopped",
    },
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    error: "Internal server error",
    message: err.message,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Government Health Mock Server running on port ${PORT}`);
  console.log(`📋 Server configured with:`);
  console.log(`   - Webhook URL: ${WEBHOOK_URL || "Not configured"}`);
  console.log(`   - Send interval: ${SEND_INTERVAL_MINUTES} minutes`);
  console.log(`   - Cron expression: ${cronExpression}`);
  console.log(`\n📖 API Documentation available at: http://localhost:${PORT}`);

  // Send initial data after 30 seconds
  setTimeout(() => {
    console.log("🎯 Sending initial health data...");
    generateAndSendHealthData();
  }, 30000);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down server gracefully...");
  cronJob.stop();
  cronJobRunning = false;
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("\n🛑 Received SIGTERM, shutting down gracefully...");
  cronJob.stop();
  cronJobRunning = false;
  process.exit(0);
});
