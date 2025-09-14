export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    platform: "Vercel Serverless",
    environment: process.env.VERCEL_ENV || "development",
    webhookUrl: process.env.WEBHOOK_URL ? "configured" : "not configured",
    region: process.env.VERCEL_REGION || "unknown",
  });
}
