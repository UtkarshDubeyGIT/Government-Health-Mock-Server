const { generateHealthPayload } = require("../mockData");

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const healthData = generateHealthPayload();
    const webhookUrl = process.env.WEBHOOK_URL;

    if (!webhookUrl) {
      return res.status(400).json({
        error: "Webhook URL not configured",
        message: "Set WEBHOOK_URL environment variable in Vercel dashboard",
        sampleData: healthData,
      });
    }

    // Import fetch dynamically
    const fetch = (await import("node-fetch")).default;

    console.log(`📤 Sending health data to webhook: ${webhookUrl}`);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Government-Health-Mock-Server/1.0.0-Vercel",
        "X-Source": "manual-trigger",
      },
      body: JSON.stringify(healthData),
      timeout: 10000,
    });

    const responseText = await response.text();

    console.log(`✅ Webhook response: ${response.status} - ${responseText}`);

    res.json({
      success: true,
      message: "Health data sent successfully",
      timestamp: healthData.timestamp,
      webhook: {
        url: webhookUrl,
        status: response.status,
        statusText: response.statusText,
        response: responseText,
      },
      data: {
        concerns: healthData.data.concerns.length,
        news: healthData.data.news.length,
        outbreaks: healthData.data.outbreaks.length,
        trivia: healthData.data.dailyTrivia ? 1 : 0,
      },
    });
  } catch (error) {
    console.error("❌ Error sending to webhook:", error);

    res.status(500).json({
      success: false,
      error: "Failed to send data to webhook",
      message: error.message,
      webhookUrl: process.env.WEBHOOK_URL || "not configured",
    });
  }
}
