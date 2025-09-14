const { generateHealthPayload } = require("../mockData");

export default async function handler(req, res) {
  // Verify this is a cron request from Vercel
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const healthData = generateHealthPayload();
    const webhookUrl = process.env.WEBHOOK_URL;

    console.log(`🕐 Cron job triggered at ${new Date().toISOString()}`);

    if (!webhookUrl) {
      console.log("⚠️ No webhook URL configured");
      return res.status(200).json({
        message: "Cron executed but no webhook URL configured",
        timestamp: new Date().toISOString(),
        data: healthData,
      });
    }

    // Import fetch dynamically
    const fetch = (await import("node-fetch")).default;

    console.log(`📤 Sending scheduled health data to: ${webhookUrl}`);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Government-Health-Mock-Server/1.0.0-Vercel-Cron",
        "X-Source": "scheduled-cron",
      },
      body: JSON.stringify(healthData),
      timeout: 15000,
    });

    const responseText = await response.text();

    console.log(`✅ Scheduled data sent successfully: ${response.status}`);

    return res.status(200).json({
      success: true,
      message: "Scheduled health data sent successfully",
      timestamp: healthData.timestamp,
      webhook: {
        status: response.status,
        response: responseText,
      },
      data: {
        concerns: healthData.data.concerns.length,
        news: healthData.data.news.length,
        outbreaks: healthData.data.outbreaks.length,
      },
    });
  } catch (error) {
    console.error("❌ Cron job error:", error);

    return res.status(500).json({
      success: false,
      error: "Cron job failed",
      message: error.message,
      timestamp: new Date().toISOString(),
    });
  }
}
