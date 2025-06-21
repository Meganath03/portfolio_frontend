#!/bin/bash

# Frontend Deployment Script

echo "🚀 Building frontend..."

# Install dependencies
npm install

# Build the project
npm run build

echo "✅ Frontend built successfully!"
echo "📁 Build output: dist/"
echo ""
echo "📋 Next steps:"
echo "1. Deploy the 'dist' folder to your hosting service"
echo "2. Set VITE_API_URL environment variable to your backend URL"
echo ""
echo "🌐 Recommended hosting services:"
echo "- Vercel: vercel --prod"
echo "- Netlify: netlify deploy --prod --dir=dist"
echo "- GitHub Pages: Push to gh-pages branch" 