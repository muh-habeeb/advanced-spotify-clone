# 🚀 Deployment Guide

This guide covers how to deploy the Realtime Spotify Clone to various platforms.

## Prerequisites

Before deploying, ensure you have:
- All environment variables configured
- Database connection string (MongoDB Atlas recommended for production)
- Cloudinary account for media storage
- Clerk authentication configured
- All dependencies updated

## Frontend Deployment

### Vercel (Recommended)

Vercel provides excellent React/Vite support with zero configuration.

#### 1. Prepare for Deployment
```bash
cd frontend
npm run build
```

#### 2. Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Select the frontend directory
# - Configure build settings
```

#### 3. Environment Variables
In Vercel dashboard, add:
```
VITE_CLERK_PUBLISHABLE_KEY=pk_live_your_production_key
```

#### 4. Vercel Configuration
Create `frontend/vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET, POST, PUT, DELETE, OPTIONS" },
        { "key": "Access-Control-Allow-Headers", "value": "Content-Type, Authorization" }
      ]
    }
  ]
}
```

### Netlify Alternative

#### 1. Build the Project
```bash
cd frontend
npm run build
```

#### 2. Deploy via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### 3. Netlify Configuration
Create `frontend/netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## Backend Deployment

### Railway (Recommended)

Railway offers excellent Node.js hosting with built-in PostgreSQL and Redis options.

#### 1. Prepare for Production
```bash
cd backend
# Ensure all dependencies are in dependencies, not devDependencies
npm install --production
```

#### 2. Create Railway Project
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

#### 3. Environment Variables
In Railway dashboard, add all required environment variables:
```
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/spotify-clone
ADMIN_EMAIL=admin@yourdomain.com
CLERK_PUBLISHABLE_KEY=pk_live_your_production_key
CLERK_SECRET_KEY=sk_live_your_production_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

#### 4. Railway Configuration
Create `backend/railway.json`:
```json
{
  "build": {
    "builder": "nixpacks"
  },
  "deploy": {
    "startCommand": "npm start"
  }
}
```

### Heroku Alternative

#### 1. Create Heroku App
```bash
# Install Heroku CLI
# Create new app
heroku create your-app-name-backend

# Add MongoDB addon (or use MongoDB Atlas)
heroku addons:create mongolab:sandbox
```

#### 2. Configure Environment
```bash
heroku config:set NODE_ENV=production
heroku config:set CLERK_SECRET_KEY=sk_live_your_secret
heroku config:set CLOUDINARY_API_KEY=your_key
# ... add all other environment variables
```

#### 3. Create Procfile
Create `backend/Procfile`:
```
web: npm start
```

#### 4. Deploy
```bash
cd backend
git init
git add .
git commit -m "Deploy to Heroku"
heroku git:remote -a your-app-name-backend
git push heroku main
```

### DigitalOcean App Platform

#### 1. Create App Spec
Create `.do/app.yaml`:
```yaml
name: spotify-clone-backend
services:
- name: api
  source_dir: backend
  github:
    repo: yourusername/realtime-spotify-clone
    branch: main
  run_command: npm start
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: NODE_ENV
    value: production
  - key: PORT
    value: "8080"
databases:
- name: mongodb
  engine: MONGODB
  version: "5"
```

## Database Setup (MongoDB Atlas)

### 1. Create Atlas Cluster
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Choose a region close to your backend deployment
4. Select M0 (free tier) for development

### 2. Configure Network Access
1. Go to Network Access
2. Add IP Address: `0.0.0.0/0` (allow all) for simplicity
3. Or add specific IPs of your deployment platform

### 3. Create Database User
1. Go to Database Access
2. Create a new user with read/write permissions
3. Note the username and password

### 4. Get Connection String
1. Go to Clusters → Connect
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your user password

## Environment Configuration

### Production Environment Variables

#### Backend (.env.production)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/spotify-clone-prod
CLERK_PUBLISHABLE_KEY=pk_live_your_production_key
CLERK_SECRET_KEY=sk_live_your_production_secret
ADMIN_EMAIL=admin@yourdomain.com
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

#### Frontend (.env.production)
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_live_your_production_key
VITE_API_URL=https://your-backend-url.com
```

## Domain Configuration

### Custom Domain Setup

#### Frontend (Vercel)
1. Go to Vercel project dashboard
2. Click "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

#### Backend (Railway/Heroku)
1. Add custom domain in platform dashboard
2. Configure DNS CNAME record to point to platform URL

### CORS Configuration
Update backend CORS settings for production:

```javascript
// backend/src/index.js
app.use(
  cors({
    origin: [
      "https://your-frontend-domain.com",
      "http://localhost:3000" // Keep for development
    ],
    credentials: true,
  })
);
```

## SSL/HTTPS Setup

Most modern platforms (Vercel, Railway, Heroku) provide automatic HTTPS.

For custom setups:
1. Obtain SSL certificate (Let's Encrypt recommended)
2. Configure your web server (Nginx/Apache)
3. Update all URLs to use HTTPS

## Monitoring and Maintenance

### Health Checks
Create `backend/src/routes/health.route.js`:
```javascript
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

export default router;
```

### Database Monitoring
- Set up MongoDB Atlas alerts
- Monitor connection limits
- Regular backup schedules

### Performance Monitoring
- Use platform-specific monitoring tools
- Set up error tracking (Sentry recommended)
- Monitor API response times

## Troubleshooting

### Common Issues

#### CORS Errors
- Check origin URL in CORS configuration
- Ensure frontend and backend URLs are correct
- Verify protocol (HTTP vs HTTPS)

#### Authentication Issues
- Verify Clerk keys are for production environment
- Check OAuth redirect URLs
- Ensure admin email is correctly set

#### Database Connection
- Verify MongoDB Atlas IP whitelist
- Check connection string format
- Ensure database user has correct permissions

#### File Upload Issues
- Verify Cloudinary credentials
- Check file size limits
- Ensure proper MIME type handling

### Debugging in Production

#### Enable Debug Logging
```javascript
// backend/src/index.js
if (process.env.NODE_ENV === 'production') {
  console.log('Production deployment successful');
  console.log('Environment variables loaded:', {
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV,
    mongoUri: process.env.MONGODB_URI ? 'Set' : 'Not set',
    clerkKey: process.env.CLERK_SECRET_KEY ? 'Set' : 'Not set'
  });
}
```

#### Check Platform Logs
- Vercel: Use Vercel dashboard
- Railway: Use Railway dashboard
- Heroku: `heroku logs --tail`

## Security Checklist

- [ ] All sensitive data in environment variables
- [ ] CORS properly configured
- [ ] HTTPS enabled
- [ ] Database access restricted
- [ ] Admin email properly set
- [ ] File upload limits configured
- [ ] Error messages don't expose sensitive data
- [ ] Dependencies updated to latest versions

## Post-Deployment

1. **Test all features** in production environment
2. **Set up monitoring** and alerting
3. **Create backup strategy** for database
4. **Document** any platform-specific configurations
5. **Share** the live URLs with stakeholders

## Scaling Considerations

### When to Scale
- High user concurrency
- Large file uploads
- Extensive chat usage
- Growing music library

### Scaling Options
- **Horizontal**: Multiple server instances
- **Vertical**: Larger server resources
- **Database**: Read replicas, sharding
- **CDN**: Static asset delivery
- **Caching**: Redis for sessions/data

This deployment guide should get your Realtime Spotify Clone running in production successfully!
<CENTER> THIS FILE IS GENERATED BY AI</CENTER>