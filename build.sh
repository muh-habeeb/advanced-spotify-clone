#!/bin/bash
set -e

echo "🔧 Starting Vercel build process..."

# Step 1: Install root dependencies
echo "📦 Installing root dependencies..."
npm install --legacy-peer-deps

# Step 2: Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install --prefix frontend --legacy-peer-deps

# Step 3: Verify Vite is installed
echo "✅ Checking Vite installation..."
npm list --prefix frontend vite

# Step 4: Build frontend
echo "🔨 Building frontend..."
npm run build --prefix frontend

echo "✅ Build completed successfully!"
