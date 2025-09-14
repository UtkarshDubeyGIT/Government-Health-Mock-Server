#!/bin/bash

# Start script for Government Health Mock Server
echo "🏥 Starting Government Health Mock Server System"
echo "=============================================="

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down servers..."
    pkill -f "node.*test-webhook-receiver.js"
    pkill -f "node.*server.js"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start the webhook receiver in background
echo "📡 Starting webhook receiver on port 3001..."
node test-webhook-receiver.js &
WEBHOOK_PID=$!

# Wait a moment for webhook receiver to start
sleep 2

# Start the main server
echo "🚀 Starting main health mock server on port 3000..."
node server.js &
MAIN_PID=$!

echo ""
echo "✅ Both servers are running!"
echo "📊 Main Server Dashboard: http://localhost:3000"
echo "📡 Webhook Receiver: http://localhost:3001"
echo "📋 API Documentation: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Wait for both processes
wait $WEBHOOK_PID $MAIN_PID