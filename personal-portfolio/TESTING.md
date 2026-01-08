# Testing Guide

## Unit Tests

### Running Tests

```bash
npm test                    # Run tests in watch mode
npm test -- --coverage      # Run with coverage
npm test -- --bail          # Stop on first failure
```

### Test Structure

```javascript
import { validateEmail } from 'src/utils/validation';

describe('validateEmail', () => {
  test('should validate correct email', () => {
    const result = validateEmail('test@example.com');
    expect(result.isValid).toBe(true);
  });

  test('should reject invalid email', () => {
    const result = validateEmail('invalid-email');
    expect(result.isValid).toBe(false);
  });
});
```

## Component Testing

### Example: Banner Component

```javascript
import { render, screen } from '@testing-library/react';
import { Banner } from 'src/components/Banner';

describe('Banner Component', () => {
  test('should render banner with title', () => {
    render(<Banner />);
    expect(screen.getByText(/Manar Marchoube/i)).toBeInTheDocument();
  });
});
```

## Integration Tests

### Testing with API

```javascript
test('should fetch projects', async () => {
  const { getByText } = render(<Projects />);
  await waitFor(() => {
    expect(getByText(/SmartShop/i)).toBeInTheDocument();
  });
});
```

## E2E Tests (Cypress)

### Installation

```bash
npm install --save-dev cypress
npx cypress open
```

### Example Test

```javascript
describe('Portfolio E2E Tests', () => {
  it('should navigate to projects section', () => {
    cy.visit('http://localhost:3000');
    cy.get('a[href*="#projects"]').click();
    cy.url().should('include', '#projects');
  });
});
```

## Coverage Goals

- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

## Test Best Practices

1. **Arrange-Act-Assert Pattern**

   - Arrange: Set up test data
   - Act: Execute the code
   - Assert: Verify the results

2. **Single Responsibility**

   - Test one thing per test
   - Clear test names

3. **Mocking**

   - Mock API calls
   - Mock external dependencies

4. **Async Testing**
   - Use async/await
   - Use waitFor for async operations

## Continuous Integration

### GitHub Actions Example

```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npm test -- --coverage
```
