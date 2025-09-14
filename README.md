# Government Health Mock Server 🏥

A Node.js server that generates and sends mock government health data (concerns, news, disease outbreaks, and prevention information) to a webhook URL every 10 minutes.

**✨ Now optimized for Vercel deployment with serverless functions and cron jobs!**

## Features

- **Automated Data Sending**: Sends health data via Vercel Cron Jobs every 10 minutes
- **Rich Mock Data**: Includes health concerns, news, disease outbreaks, and daily trivia
- **Web Dashboard**: Monitor server status, view logs, and control the service
- **RESTful API**: Full API for managing the server and data
- **Serverless Ready**: Optimized for Vercel's serverless platform
- **Error Handling**: Robust error handling and logging
- **Global Distribution**: Leverages Vercel's edge network

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/UtkarshDubeyGIT/Government-Health-Mock-Server)

1. **Click the deploy button above**
2. **Set environment variables:**
   - `WEBHOOK_URL`: Your webhook endpoint
   - `CRON_SECRET`: Random secret for cron security
3. **Deploy and enjoy automated health data!**

For detailed deployment instructions, see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md).

## Local Development

### Traditional Node.js Server

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Configure environment** (copy `.env.example` to `.env`):

   ```bash
   cp .env.example .env
   ```

3. **Update the webhook URL in `.env`**:

   ```env
   WEBHOOK_URL=https://your-main-server.com/webhook
   SEND_INTERVAL_MINUTES=10
   PORT=3000
   ```

4. **Start the traditional server**:

   ```bash
   npm start
   ```

5. **Access the dashboard**: Open http://localhost:3000

### Vercel Serverless Development

1. **Install Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Start local development**:

   ```bash
   vercel dev
   ```

3. **Access the dashboard**: Open http://localhost:3000

## API Endpoints

### Vercel Serverless (Production)

- `GET /api/health` - Server health check
- `GET /api/sample` - Get sample health data
- `POST /api/trigger` - Manually trigger data send
- `POST /api/cron` - Cron job endpoint (automated)

### Traditional Server (Local Development)

- `GET /` - API documentation and server info
- `GET /health` - Server health check
- `GET /api/sample` - Get sample health data
- `GET /api/logs` - Get transmission logs
- `POST /api/trigger` - Manually trigger data send
- `POST /api/webhook-url` - Update webhook URL
- `POST /api/toggle` - Start/stop automatic sending

### Dashboard

- `GET /` - Web dashboard for monitoring (both environments)

## Data Structure

The server sends JSON payloads with the following structure:

```json
{
  "timestamp": "2025-09-14T10:30:00.000Z",
  "type": "health_update",
  "data": {
    "concerns": [
      {
        "id": "concern_001",
        "title": "Rising Cases of Respiratory Infections",
        "description": "Health officials report a 15% increase...",
        "severity": "medium",
        "affectedAreas": ["New York", "Los Angeles"],
        "recommendations": ["Wear masks in crowded areas", "..."]
      }
    ],
    "news": [
      {
        "id": "news_001",
        "headline": "New Vaccine Program Launched",
        "summary": "Government announces expanded vaccination...",
        "source": "Department of Health",
        "category": "vaccination"
      }
    ],
    "outbreaks": [
      {
        "id": "outbreak_001",
        "disease": "Influenza A",
        "location": "Midwest Region",
        "casesReported": 1250,
        "status": "contained",
        "prevention": ["Get annual flu vaccination", "..."],
        "riskLevel": "moderate"
      }
    ],
    "dailyTrivia": {
      "id": "trivia_001",
      "question": "How many times should you wash your hands per day?",
      "answer": "Health experts recommend washing hands at least 5-10 times...",
      "category": "hygiene",
      "funFact": "The 20-second hand washing rule was established..."
    }
  },
  "metadata": {
    "source": "Government Health Mock Server",
    "version": "1.0.0",
    "region": "US",
    "dataFreshness": "real-time"
  }
}
```

## Configuration

### Environment Variables

- `PORT` - Server port (default: 3000)
- `WEBHOOK_URL` - Target webhook URL for sending data
- `SEND_INTERVAL_MINUTES` - How often to send data (default: 10 minutes)

### Webhook Requirements

Your receiving server should accept POST requests with JSON payloads at the configured webhook URL. Example webhook handler:

```javascript
app.post("/webhook", (req, res) => {
  const healthData = req.body;
  console.log("Received health data:", healthData);

  // Process the health data
  // Store in database, trigger notifications, etc.

  res.status(200).json({ received: true });
});
```

## Development

### Scripts

- `npm start` - Start the traditional Node.js server
- `npm run dev` - Start with nodemon for development
- `npm run vercel:dev` - Start Vercel development server
- `npm run webhook` - Start test webhook receiver

### File Structure

```
├── api/                  # Vercel serverless functions
│   ├── health.js        # Health check endpoint
│   ├── sample.js        # Sample data endpoint
│   ├── trigger.js       # Manual trigger endpoint
│   ├── cron.js          # Automated cron endpoint
│   └── index.js         # Main API handler
├── public/              # Static files
│   └── index.html       # Web dashboard
├── server.js            # Traditional Express server
├── mockData.js          # Mock health data generator
├── vercel.json          # Vercel configuration
├── package.json         # Dependencies and scripts
├── .env.example         # Environment template
└── VERCEL_DEPLOYMENT.md # Detailed deployment guide
```

## Deployment Options

### 1. Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Set environment variables in Vercel Dashboard:
# - WEBHOOK_URL: https://your-main-server.com/webhook
# - CRON_SECRET: your-random-secret
```

### 2. Traditional Hosting

```bash
# Any Node.js hosting platform
npm start

# Set environment variables:
# - WEBHOOK_URL, SEND_INTERVAL_MINUTES, PORT
```

### 3. Docker

```bash
# Build and run with Docker
docker build -t health-mock-server .
docker run -p 3000:3000 -e WEBHOOK_URL=your-url health-mock-server
```

## Mock Data Categories

### Health Concerns

- Respiratory infections
- Water quality alerts
- Seasonal allergies
- Heat wave warnings

### News Updates

- Vaccination programs
- Mental health services
- Food safety guidelines
- Telehealth services

### Disease Outbreaks

- Influenza tracking
- Norovirus monitoring
- Vector-borne diseases
- Prevention guidelines

### Daily Trivia

- Hygiene facts
- Nutrition information
- Exercise recommendations
- Sleep health tips

## Monitoring

The web dashboard provides:

- Real-time server status
- Transmission logs
- Manual controls
- Sample data preview
- Webhook configuration

## Error Handling

The server includes comprehensive error handling:

- Network timeouts (10 seconds)
- Failed webhook deliveries
- Invalid configurations
- Graceful shutdown

## License

MIT License - feel free to use this for your projects!
