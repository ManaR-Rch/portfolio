# API Documentation

## Overview

This portfolio uses custom utility functions for API calls instead of a dedicated backend.

## API Service

### Base Functions

#### GET Request

```javascript
import { get } from 'src/services/api';

const data = await get('https://api.example.com/endpoint');
```

#### POST Request

```javascript
import { post } from 'src/services/api';

const data = await post('https://api.example.com/endpoint', {
  name: 'Manar',
  email: 'manar@example.com',
});
```

#### PUT Request

```javascript
import { put } from 'src/services/api';

const data = await put('https://api.example.com/endpoint/1', {
  name: 'Updated Name',
});
```

#### DELETE Request

```javascript
import { del } from 'src/services/api';

await del('https://api.example.com/endpoint/1');
```

## Data Models

### Project Model

```javascript
{
  id: number,
  title: string,
  description: string,
  image: string,
  link: string,
  videoLink?: string,
  tags?: string[]
}
```

### Skill Model

```javascript
{
  name: string,
  level: number (1-3)
}
```

### Contact Model

```javascript
{
  name: string,
  email: string,
  message: string,
  subject?: string
}
```

## Error Handling

All API functions include built-in error handling:

```javascript
try {
  const data = await get('https://api.example.com/endpoint');
} catch (error) {
  console.error('API Error:', error);
  // Handle error appropriately
}
```

## Rate Limiting

For external APIs, implement rate limiting:

```javascript
import { throttle } from 'src/utils/performance';

const throttledFetch = throttle(() => {
  get('https://api.example.com/endpoint');
}, 1000);
```

## CORS

If using external APIs, ensure CORS is properly configured on the server.

## Authentication

For protected endpoints, add authorization headers:

```javascript
const headers = {
  Authorization: `Bearer ${token}`,
};

const data = await fetch('https://api.example.com/protected', {
  headers,
  method: 'GET',
});
```
