# Nebula Ultimate

**Free, Offline, Open and Infinitely Expandable Development Platform**

[![Deploy to GitHub Pages](https://github.com/SpidermanTotro/-https-SpidermanTotro.github.io-nebula-ultimate-/actions/workflows/deploy.yml/badge.svg)](https://github.com/SpidermanTotro/-https-SpidermanTotro.github.io-nebula-ultimate-/actions/workflows/deploy.yml)

[Visit the Website](https://spidermantotro.github.io/-https-SpidermanTotro.github.io-nebula-ultimate-/) | [ChatGPT Extractor Tool](https://spidermantotro.github.io/-https-SpidermanTotro.github.io-nebula-ultimate-/chatgpt-extractor.html) | [Documentation](USAGE.md) | [Contributing](CONTRIBUTING.md)

## Features

- 🧠 Core AI coding: codegen, refactor, bugfix, explain & more
- 📋 Project boards, team/family/studio flows, attachments, collab
- 🌌 Plugin & extension hub: community-driven, easy upgrades
- 🎮 GameDev toolkit: multiplayer, jams, events, device mapping (VR, gamepad, tablet)
- 📊 Analytics & dashboard: real-time stats, logs, visualizations
- 🚀 Asset/template marketplace: submit, rate, moderate
- 🌐 Federation: global contests, leaderboards, events
- 🗣️ Accessibility: multi-language, voice/touch, onboarding missions
- 🔄 Migration/import/export: Unity, Godot, JetBrains, VS, ChatGPT, etc.
- 🤖 Onboarding, helpbot, FAQ, advanced docs & guides

## ChatGPT Export Extractor

A powerful, client-side tool to extract and analyze your ChatGPT conversation exports with enhanced features:

### Key Features

- 📤 **Multi-format Export**: JSON, Plain Text, Markdown, and HTML
- 🔍 **Real-time Search**: Search across conversation titles and message content
- 📊 **Statistics Dashboard**: View conversation counts, message statistics, and breakdowns
- 🌐 **Multi-language Support**: English, Spanish, and French
- ♿ **Accessible**: Full keyboard navigation and screen reader support
- 📱 **Mobile Responsive**: Optimized for all screen sizes and touch interfaces
- 🚀 **Large Data Handling**: Pagination and optimized rendering for thousands of conversations
- 🔒 **Privacy First**: All processing happens in your browser - no data is sent to any server
- ⚡ **Fast Performance**: Efficient search and rendering even with large datasets

[Launch ChatGPT Extractor](https://spidermantotro.github.io/-https-SpidermanTotro.github.io-nebula-ultimate-/chatgpt-extractor.html) | [View Usage Guide](USAGE.md)

## Quick Start

### For Users

1. Visit the [ChatGPT Extractor](https://spidermantotro.github.io/-https-SpidermanTotro.github.io-nebula-ultimate-/chatgpt-extractor.html)
2. Click "Try Demo Data" to explore with sample conversations
3. Or upload your own `conversations.json` from ChatGPT

### For Developers

```bash
# Clone the repository
git clone https://github.com/SpidermanTotro/-https-SpidermanTotro.github.io-nebula-ultimate-.git
cd -https-SpidermanTotro.github.io-nebula-ultimate-

# Install dependencies
npm install

# Run tests
npm test

# Start local development server
npm run serve
# Open http://localhost:8000 in your browser
```

## Repository Structure

```
.
├── index.html                  # Main website homepage
├── chatgpt-extractor.html     # ChatGPT extractor tool (enhanced UI)
├── chatgpt-extractor-core.js  # Core business logic (testable module)
├── i18n.js                    # Internationalization module
├── sample-chatgpt-export.json # Sample data for testing
├── tests/                     # Automated test suite
│   └── chatgpt-extractor.test.js
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages deployment workflow
├── USAGE.md                   # Comprehensive usage guide
├── CONTRIBUTING.md            # Contributing guidelines
├── package.json              # npm dependencies and scripts
├── jest.config.js            # Jest test configuration
└── README.md                 # This file
```

## Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Testing**: Jest with jsdom
- **CI/CD**: GitHub Actions for automated deployment
- **Deployment**: GitHub Pages
- **Internationalization**: Custom i18n module
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## Features in Detail

### Accessibility

- Full keyboard navigation support
- Screen reader compatible with ARIA labels
- High contrast mode support
- Semantic HTML structure
- Focus management

### Mobile Support

- Responsive design for all screen sizes
- Touch-friendly interface
- Optimized for mobile browsers
- Progressive enhancement

### Performance Optimizations

- Pagination for large datasets (configurable: 10, 25, 50, 100 items per page)
- Lazy rendering to prevent UI blocking
- Efficient search algorithms
- Minimal DOM manipulation

### Multi-language Support

Currently supported languages:
- 🇬🇧 English (en)
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)

Language preference is saved in browser localStorage.

## Testing

Run the automated test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest features
- 🌐 Add translations
- 📝 Improve documentation
- 🧪 Write tests
- 💻 Submit pull requests

## License

MIT License - see LICENSE file for details

## Acknowledgments

- Built with modern web standards
- Inspired by the need for offline, privacy-focused tools
- Community-driven development

## Support

- 📖 [Usage Documentation](USAGE.md)
- 🤝 [Contributing Guide](CONTRIBUTING.md)
- 🐛 [Report Issues](https://github.com/SpidermanTotro/-https-SpidermanTotro.github.io-nebula-ultimate-/issues)
- 💬 [Discussions](https://github.com/SpidermanTotro/-https-SpidermanTotro.github.io-nebula-ultimate-/discussions)

---

**Nebula Ultimate © 2025** — Free, Open, and Always Expanding
