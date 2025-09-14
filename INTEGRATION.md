# Government Health Mock Server Configuration Guide

## Quick Setup for Your Main Backend Server

### 1. Webhook Endpoint Setup

Add this endpoint to your main backend server to receive health data:

```javascript
// Express.js example
app.post("/webhook/health-data", express.json(), (req, res) => {
  const healthData = req.body;

  try {
    // Process the health data
    console.log("Received health update:", healthData.timestamp);

    // Example: Store in database
    // await HealthData.create(healthData);

    // Example: Trigger notifications
    // await sendNotifications(healthData.data.concerns);

    // Example: Update dashboard
    // await updateDashboard(healthData);

    res.status(200).json({
      received: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error processing health data:", error);
    res.status(500).json({ error: "Processing failed" });
  }
});
```

### 2. Update Environment Variables

In your `.env` file:

```env
# Replace with your actual webhook URL
WEBHOOK_URL=https://your-main-server.com/webhook/health-data

# Optional: Customize interval (in minutes)
SEND_INTERVAL_MINUTES=10

# Optional: Set custom port
PORT=3000
```

### 3. Data Processing Examples

#### Store in MongoDB

```javascript
const healthDataSchema = new mongoose.Schema({
  timestamp: Date,
  type: String,
  concerns: Array,
  news: Array,
  outbreaks: Array,
  dailyTrivia: Object,
  metadata: Object,
});

app.post("/webhook/health-data", async (req, res) => {
  try {
    const healthData = new HealthData(req.body);
    await healthData.save();
    res.json({ received: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

#### Trigger Real-time Updates

```javascript
// Using Socket.io
app.post("/webhook/health-data", (req, res) => {
  const healthData = req.body;

  // Send to all connected clients
  io.emit("health-update", healthData);

  // Send urgent alerts for high severity concerns
  const urgentConcerns = healthData.data.concerns.filter(
    (concern) => concern.severity === "high"
  );

  if (urgentConcerns.length > 0) {
    io.emit("urgent-alert", urgentConcerns);
  }

  res.json({ received: true });
});
```

#### Process with Filters

```javascript
app.post("/webhook/health-data", (req, res) => {
  const { data } = req.body;

  // Filter by location
  const localConcerns = data.concerns.filter((concern) =>
    concern.affectedAreas.includes("Your-Region")
  );

  // Filter by severity
  const highPriority = data.concerns.filter(
    (concern) => concern.severity === "high"
  );

  // Process outbreaks
  const activeOutbreaks = data.outbreaks.filter(
    (outbreak) => outbreak.status === "active"
  );

  // Your processing logic here

  res.json({ received: true });
});
```

### 4. Security Recommendations

#### Add Webhook Secret Validation

```javascript
const crypto = require("crypto");

function validateWebhook(req, res, next) {
  const signature = req.headers["x-webhook-signature"];
  const secret = process.env.WEBHOOK_SECRET;

  if (!signature || !secret) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const hash = crypto
    .createHmac("sha256", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (signature !== `sha256=${hash}`) {
    return res.status(401).json({ error: "Invalid signature" });
  }

  next();
}

app.post("/webhook/health-data", validateWebhook, (req, res) => {
  // Process authenticated webhook
});
```

#### Rate Limiting

```javascript
const rateLimit = require("express-rate-limit");

const webhookLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 20, // Max 20 requests per window
  message: "Too many webhook requests",
});

app.post("/webhook/health-data", webhookLimiter, (req, res) => {
  // Process rate-limited webhook
});
```

### 5. Testing Your Integration

Use these curl commands to test your webhook endpoint:

```bash
# Test basic connectivity
curl -X POST http://your-server.com/webhook/health-data \
  -H "Content-Type: application/json" \
  -d '{"test": true}'

# Test with sample health data
curl -X POST http://your-server.com/webhook/health-data \
  -H "Content-Type: application/json" \
  -d @sample-health-data.json
```

### 6. Monitoring and Logging

```javascript
app.post("/webhook/health-data", (req, res) => {
  const startTime = Date.now();

  try {
    // Process data
    const healthData = req.body;

    // Log metrics
    console.log({
      timestamp: new Date().toISOString(),
      event: "health_data_received",
      concerns_count: healthData.data.concerns?.length || 0,
      news_count: healthData.data.news?.length || 0,
      outbreaks_count: healthData.data.outbreaks?.length || 0,
      processing_time: Date.now() - startTime,
    });

    res.json({ received: true });
  } catch (error) {
    console.error("Webhook processing error:", {
      error: error.message,
      timestamp: new Date().toISOString(),
      processing_time: Date.now() - startTime,
    });

    res.status(500).json({ error: "Processing failed" });
  }
});
```
