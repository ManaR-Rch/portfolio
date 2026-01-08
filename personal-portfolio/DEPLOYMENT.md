# Deployment Guide

## Prerequisites

- Node.js 14+
- npm or yarn
- Git

## Local Development

```bash
# Clone repository
git clone https://github.com/ManaR-Rch/portfolio.git
cd personal-portfolio

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm start
```

## Build for Production

```bash
# Build optimized production bundle
npm run build

# Build size analysis
npm run build -- --analyze

# Test production build locally
npm install -g serve
serve -s build
```

## Deployment to Vercel

### Method 1: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

### Method 2: GitHub Integration

1. Connect your GitHub repo to Vercel
2. Deploy automatically on push to main branch
3. Set environment variables in Vercel dashboard

## Deployment to Netlify

### Method 1: Using Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Method 2: Git Integration

1. Connect GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

## Environment Variables

Set these in your deployment platform:

- `REACT_APP_API_URL` - Backend API URL
- `REACT_APP_GA_ID` - Google Analytics ID
- `REACT_APP_ENABLE_ANALYTICS` - Enable analytics
- `GENERATE_SOURCEMAP` - Generate source maps (set to false for production)

## Performance Optimization

### Before Deployment

1. Run production build locally
2. Test all links and functionality
3. Check responsive design
4. Verify SEO meta tags
5. Optimize images

### After Deployment

1. Monitor Core Web Vitals
2. Check Google Search Console
3. Set up analytics tracking
4. Monitor error logs

## Monitoring & Maintenance

### Google Analytics

- Set up property tracking
- Monitor page views and user behavior
- Track conversion goals

### Error Tracking

- Set up Sentry for error monitoring
- Configure email notifications
- Review and fix errors promptly

### Performance Monitoring

- Use Lighthouse CI
- Monitor bundle size
- Track Core Web Vitals

## Rollback

To rollback to previous version:

```bash
git revert <commit-hash>
git push origin main
```

## Troubleshooting

### Build fails

- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

### Slow performance

- Check bundle size: `npm run build -- --analyze`
- Optimize images
- Enable gzip compression on server

### CSS/JS not loading

- Check browser cache
- Clear service worker
- Verify file paths are correct
