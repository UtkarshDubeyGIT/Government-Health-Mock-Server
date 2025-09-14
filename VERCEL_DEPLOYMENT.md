# Vercel Deployment Guide 🚀

## Quick Deployment Steps

### 1. Install Vercel CLI

```bash
npm i -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

### 3. Deploy to Vercel

```bash
vercel --prod
```

### 4. Set Environment Variables

In your Vercel Dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add these variables:

| Variable      | Value                                  | Description                |
| ------------- | -------------------------------------- | -------------------------- |
| `WEBHOOK_URL` | `https://your-main-server.com/webhook` | Your webhook endpoint      |
| `CRON_SECRET` | `your-random-secret-string`            | Security for cron endpoint |

### 5. Configure Your Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## API Endpoints (After Deployment)

### Base URL: `https://your-project.vercel.app`

| Endpoint       | Method | Description                  |
| -------------- | ------ | ---------------------------- |
| `/`            | GET    | Dashboard (Web UI)           |
| `/api/health`  | GET    | Server health check          |
| `/api/sample`  | GET    | Get sample health data       |
| `/api/trigger` | POST   | Manually send health data    |
| `/api/cron`    | POST   | Cron job endpoint (internal) |

## Automated Sending Setup

The `vercel.json` file includes a cron job configuration that will automatically send health data every 10 minutes:

```json
{
  "crons": [
    {
      "path": "/api/cron",
      "schedule": "*/10 * * * *"
    }
  ]
}
```

### Cron Schedule Options:

- `*/10 * * * *` - Every 10 minutes
- `*/5 * * * *` - Every 5 minutes
- `0 * * * *` - Every hour
- `0 */2 * * *` - Every 2 hours
- `0 9 * * *` - Daily at 9 AM

## Security Considerations

### 1. Cron Secret

Set `CRON_SECRET` environment variable to secure your cron endpoint:

```javascript
// In your webhook receiver
app.post("/webhook", (req, res) => {
  const source = req.headers["x-source"];
  console.log("Data source:", source); // 'scheduled-cron' or 'manual-trigger'

  // Your processing logic
});
```

### 2. Webhook Authentication

Add authentication to your webhook receiver:

```javascript
app.post("/webhook", (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.WEBHOOK_SECRET}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Process webhook data
});
```

## Monitoring & Logging

### 1. Vercel Function Logs

- Go to Vercel Dashboard → Functions tab
- View real-time logs for each API call
- Monitor execution time and errors

### 2. Custom Monitoring

Set up external monitoring for your webhook endpoint:

```javascript
// In your main server
app.post("/webhook", (req, res) => {
  const healthData = req.body;

  // Log to monitoring service
  console.log({
    event: "health_data_received",
    timestamp: new Date().toISOString(),
    source: req.headers["x-source"],
    concerns: healthData.data.concerns.length,
    news: healthData.data.news.length,
    outbreaks: healthData.data.outbreaks.length,
  });

  res.json({ received: true });
});
```

## Troubleshooting

### Common Issues:

#### 1. Webhook Not Receiving Data

- Check `WEBHOOK_URL` environment variable
- Verify your webhook endpoint is accessible
- Check Vercel function logs

#### 2. Cron Jobs Not Running

- Ensure you're on Vercel Pro plan (required for cron jobs)
- Check `CRON_SECRET` is set
- Verify cron schedule syntax

#### 3. Function Timeouts

- Functions have a 10-second timeout on Hobby plan
- Upgrade to Pro for 60-second timeout
- Optimize webhook receiver response time

## Local Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Create .env File

```env
WEBHOOK_URL=http://localhost:3001/webhook
CRON_SECRET=dev-secret
```

### 3. Start Local Development

```bash
vercel dev
```

This starts the Vercel development server with serverless functions.

### 4. Test Endpoints

```bash
# Health check
curl http://localhost:3000/api/health

# Trigger manual send
curl -X POST http://localhost:3000/api/trigger

# Get sample data
curl http://localhost:3000/api/sample
```

## Production Best Practices

### 1. Environment Variables

- Use different webhook URLs for staging/production
- Set up proper authentication secrets
- Configure monitoring endpoints

### 2. Error Handling

- Implement retry logic in webhook receiver
- Set up dead letter queues for failed deliveries
- Monitor function execution metrics

### 3. Data Persistence

- Consider using a database for tracking sent data
- Implement proper logging and analytics
- Set up alerting for failed webhook deliveries

## Scaling Considerations

### 1. Rate Limiting

Vercel functions have usage limits:

- Hobby: 100GB-hours/month
- Pro: 1000GB-hours/month

### 2. Cold Starts

- Functions may have cold start delays
- Consider using Vercel Edge Functions for better performance
- Implement proper timeout handling in webhook receiver

### 3. Geographic Distribution

- Vercel automatically deploys to global edge locations
- Your webhook receiver should handle requests from different regions
- Consider using Vercel's regional functions if needed

## Support

For issues with deployment:

1. Check Vercel documentation: https://vercel.com/docs
2. Review function logs in Vercel Dashboard
3. Test locally with `vercel dev`
4. Check environment variable configuration
