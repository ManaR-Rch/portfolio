# Architecture Guide

## Project Structure

```
personal-portfolio/
├── public/                 # Static files
│   ├── index.html
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── assets/            # Images, fonts, videos
│   │   ├── img/
│   │   └── font/
│   ├── components/        # React components
│   │   ├── Banner.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── ErrorBoundary.js
│   │   └── ...
│   ├── constants/         # Constants and config
│   │   └── profileData.js
│   ├── config/            # App configuration
│   │   └── index.js
│   ├── services/          # API services
│   │   └── api.js
│   ├── utils/             # Utility functions
│   │   ├── helpers.js
│   │   ├── validation.js
│   │   ├── animations.js
│   │   ├── performance.js
│   │   ├── seo.js
│   │   └── security.js
│   ├── hooks/             # Custom React hooks
│   │   └── useScroll.js
│   ├── App.js             # Main app component
│   ├── App.css            # Global styles
│   ├── index.js           # Entry point
│   └── index.css          # Base styles
├── .env.example           # Environment variables template
├── .editorconfig          # Editor configuration
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies
├── README.md              # Project readme
├── CHANGELOG.md           # Version history
├── CONTRIBUTING.md        # Contribution guidelines
├── API_DOCS.md            # API documentation
├── DEPLOYMENT.md          # Deployment guide
└── ARCHITECTURE.md        # This file
```

## Component Hierarchy

```
App
├── Header/Navbar
├── Banner (Hero Section)
├── Skills (Skills Section)
├── Projects (Projects Section)
│   └── ProjectCard (Repeating)
├── Contact/Newsletter
└── Footer
```

## Data Flow

### Props Flow

```
App
├── Banner
│   └── Profile data from constants
├── Skills
│   └── Skills array from constants
└── Projects
    └── Projects array from constants
```

### State Management

- Uses React hooks (useState, useEffect)
- Local state for component-specific data
- Could be extended with Context API or Redux

## Styling Architecture

### CSS Hierarchy

1. **index.css** - Base/reset styles
2. **App.css** - Global component styles
3. **Component CSS** - Individual component overrides

### Design System

- **Colors**: Purple (#8d37a4) to Magenta (#d946ef) gradient
- **Spacing**: Consistent margin/padding scale
- **Typography**: Responsive font sizes
- **Animations**: Smooth transitions and effects

## Service Layer

### API Service (`services/api.js`)

- Centralized HTTP requests
- Error handling
- Request/response formatting

### Utility Services

- **Helpers**: String manipulation, date formatting
- **Validation**: Email, phone, form validation
- **Animations**: Animation utilities
- **Performance**: Debounce, throttle, memoize
- **Security**: Sanitization, security headers
- **SEO**: Meta tags, structured data

## Custom Hooks

### useScroll

- Detects scroll position
- Detects scroll activity
- Useful for scroll animations

### useInView

- Detects element visibility
- Used with Intersection Observer
- Triggers animations on scroll

### useWindowSize

- Tracks window dimensions
- Useful for responsive behavior

## State Management Opportunities

### Future Enhancements

1. **Context API** - Share global state
2. **Redux** - Complex state management
3. **Zustand** - Lightweight state manager
4. **Jotai** - Atomic state management

## Performance Considerations

### Current Optimizations

- Component-based splitting
- Lazy loading with Intersection Observer
- CSS animations instead of JS
- Memoization utilities available

### Future Improvements

- Code splitting with React.lazy
- Image optimization
- Bundle size optimization
- Service Worker for offline support

## Testing Strategy

### Unit Tests

- Utility functions (helpers, validation)
- Custom hooks

### Component Tests

- Component rendering
- Props handling
- User interactions

### E2E Tests

- Full user flows
- Navigation
- Form submissions

## Error Handling

### Error Boundary

- Catches React component errors
- Displays fallback UI
- Prevents app crash

### API Errors

- Try-catch blocks
- Error logging
- User-friendly messages

### Validation Errors

- Form validation
- Input sanitization
- Error messages

## Security Measures

### Input Sanitization

- Escape HTML
- Validate URLs
- Remove XSS vectors

### Headers

- X-Frame-Options
- X-Content-Type-Options
- Content Security Policy

### HTTPS

- Required for production
- Secure communications

## Scalability

### Code Organization

- Modular components
- Reusable utilities
- Clear separation of concerns

### Performance

- Lazy loading
- Code splitting
- Image optimization
- Caching strategies

### Maintainability

- Clear naming conventions
- JSDoc comments
- Comprehensive documentation
