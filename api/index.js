const { generateHealthPayload } = require("../mockData");

// In-memory storage for logs (in production, use a database)
let sentDataLog = [];

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Route handling
  const { url, method } = req;

  try {
    if (url === "/api" || url === "/api/") {
      // API documentation
      res.json({
        name: "Government Health Mock Server",
        version: "1.0.0",
        description: "Mock server for government health data, news, and alerts",
        endpoints: {
          "GET /api": "API documentation",
          "GET /api/health": "Server health check",
          "GET /api/sample": "Get sample health data",
          "GET /api/logs": "Get transmission logs",
          "POST /api/trigger": "Manually trigger data send",
          "POST /api/webhook-url": "Update webhook URL",
        },
        configuration: {
          webhookUrl: process.env.WEBHOOK_URL || "Not configured",
          platform: "Vercel Serverless",
        },
      });
    } else if (url === "/api/health") {
      // Health check
      res.json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        platform: "Vercel",
        environment: process.env.VERCEL_ENV || "development",
        webhookUrl: process.env.WEBHOOK_URL ? "configured" : "not configured",
      });
    } else if (url === "/api/sample") {
      // Get sample data
      const sampleData = generateHealthPayload();
      res.json(sampleData);
    } else if (url === "/api/logs") {
      // Get logs
      res.json({
        totalSent: sentDataLog.length,
        logs: sentDataLog.slice(-20),
        lastUpdate:
          sentDataLog.length > 0
            ? sentDataLog[sentDataLog.length - 1].timestamp
            : null,
        note: "Logs are stored in memory and reset on each deployment",
      });
    } else if (url === "/api/trigger" && method === "POST") {
      // Manual trigger
      handleManualTrigger(req, res);
    } else if (url === "/api/webhook-url" && method === "POST") {
      // Update webhook URL (note: this won't persist in serverless)
      const { url: webhookUrl } = req.body || {};

      if (!webhookUrl) {
        return res.status(400).json({ error: "URL is required" });
      }

      res.json({
        message: "Webhook URL received",
        note: "In serverless environment, set WEBHOOK_URL environment variable",
        providedUrl: webhookUrl,
      });
    } else {
      res.status(404).json({ error: "Not found" });
    }
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
}

async function handleManualTrigger(req, res) {
  try {
    const healthData = generateHealthPayload();
    const webhookUrl = process.env.WEBHOOK_URL;

    if (!webhookUrl) {
      return res.status(400).json({
        error: "Webhook URL not configured",
        message: "Set WEBHOOK_URL environment variable in Vercel",
      });
    }

    // Send to webhook
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Government-Health-Mock-Server/1.0.0-Vercel",
      },
      body: JSON.stringify(healthData),
    });

    // Log the result
    const logEntry = {
      timestamp: new Date().toISOString(),
      status: response.ok ? "success" : "error",
      responseStatus: response.status,
      dataId: healthData.timestamp,
      manual: true,
    };

    sentDataLog.push(logEntry);

    // Keep only last 100 entries
    if (sentDataLog.length > 100) {
      sentDataLog = sentDataLog.slice(-100);
    }

    res.json({
      message: "Health data sent successfully",
      timestamp: healthData.timestamp,
      webhookStatus: response.status,
      data: healthData,
    });
  } catch (error) {
    console.error("Error sending to webhook:", error);

    // Log the error
    sentDataLog.push({
      timestamp: new Date().toISOString(),
      status: "error",
      error: error.message,
      manual: true,
    });

    res.status(500).json({
      error: "Failed to send data",
      message: error.message,
    });
  }
}
