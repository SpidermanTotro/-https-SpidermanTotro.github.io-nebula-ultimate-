# Contributing to Nebula Ultimate ChatGPT Extractor

Thank you for your interest in contributing to the Nebula Ultimate ChatGPT Extractor! This document provides guidelines and information for contributors.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Assume good intentions

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/SpidermanTotro/-https-SpidermanTotro.github.io-nebula-ultimate-/issues)
2. If not, create a new issue with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/OS information
   - Screenshots if applicable

### Suggesting Enhancements

1. Check existing issues and pull requests first
2. Create a new issue describing:
   - The enhancement in detail
   - Why it would be useful
   - Possible implementation approach

### Contributing Code

1. **Fork the repository**
   ```bash
   git clone https://github.com/SpidermanTotro/-https-SpidermanTotro.github.io-nebula-ultimate-.git
   cd -https-SpidermanTotro.github.io-nebula-ultimate-
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation as needed
   - Ensure all tests pass

4. **Test your changes**
   ```bash
   npm install
   npm test
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add feature: description of your changes"
   ```

6. **Push and create a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- A modern web browser
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/SpidermanTotro/-https-SpidermanTotro.github.io-nebula-ultimate-.git
cd -https-SpidermanTotro.github.io-nebula-ultimate-

# Install dependencies
npm install

# Run tests
npm test

# Start local server
npm run serve
```

### Project Structure

```
.
├── index.html                  # Main landing page
├── chatgpt-extractor.html     # ChatGPT extractor tool
├── chatgpt-extractor-core.js  # Core business logic (testable)
├── i18n.js                    # Internationalization module
├── sample-chatgpt-export.json # Sample data for testing
├── tests/                     # Test files
│   └── chatgpt-extractor.test.js
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages deployment
├── package.json               # Dependencies and scripts
├── jest.config.js            # Test configuration
└── README.md                  # Project documentation
```

## Coding Standards

### HTML/CSS

- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Mobile-first responsive design
- Follow BEM naming convention for CSS classes

### JavaScript

- Use ES6+ features
- Write modular, testable code
- Include JSDoc comments for functions
- Handle errors gracefully
- Validate user input

### Testing

- Write unit tests for all new functions
- Aim for >70% code coverage
- Test edge cases and error conditions
- Use descriptive test names

### Accessibility

- All interactive elements must be keyboard accessible
- Include proper ARIA labels and roles
- Maintain sufficient color contrast
- Support screen readers
- Test with accessibility tools

## Adding Translations

To add a new language:

1. Edit `i18n.js`
2. Add a new language object in the `translations` constant
3. Translate all keys from the English version
4. Test the new language in the UI

Example:

```javascript
de: {
  title: 'ChatGPT Export Extraktor',
  subtitle: 'Extrahieren und analysieren Sie Ihre ChatGPT-Konversationsexporte',
  // ... add all other translations
}
```

## Pull Request Guidelines

- Keep PRs focused on a single feature/fix
- Write clear, descriptive PR descriptions
- Include screenshots for UI changes
- Ensure all tests pass
- Update documentation if needed
- Request review from maintainers

## Questions?

If you have questions, feel free to:
- Open an issue for discussion
- Check existing documentation
- Reach out to maintainers

Thank you for contributing! 🎉
