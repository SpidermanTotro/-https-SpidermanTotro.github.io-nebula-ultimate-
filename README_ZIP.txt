# Nebula Ultimate - ChatGPT Export Extractor
## Quick Start Guide for ZIP Distribution

### What's Included
This ZIP file contains a complete, self-contained ChatGPT Export Extractor tool.
All files needed to run the application are included.

### How to Use

#### Option 1: Simple Local Testing (Recommended)
1. Extract this ZIP file to a folder on your computer
2. Open `chatgpt-extractor.html` directly in your web browser
   - Double-click the file, or
   - Right-click → Open with → Your browser (Chrome, Firefox, Safari, Edge)
3. Click "Try Demo Data" to see how it works
4. Or upload your own ChatGPT export file

#### Option 2: Run with Local Server (For full PWA features)
1. Extract the ZIP file
2. Open a terminal/command prompt in the extracted folder
3. Run a simple HTTP server:
   
   **Python 3:**
   ```
   python -m http.server 8000
   ```
   
   **Python 2:**
   ```
   python -m SimpleHTTPServer 8000
   ```
   
   **Node.js (if you have npx):**
   ```
   npx http-server -p 8000
   ```
   
   **PHP:**
   ```
   php -S localhost:8000
   ```

4. Open your browser to: http://localhost:8000/chatgpt-extractor.html

### Features
✅ Works offline after first load (PWA)
✅ Multi-language support (English, Spanish, French)
✅ Export to JSON, Text, Markdown, HTML
✅ Search and filter conversations
✅ Pagination for large datasets
✅ Mobile-responsive design
✅ Fully accessible (keyboard navigation, screen readers)

### How to Get Your ChatGPT Export
1. Go to ChatGPT (chat.openai.com)
2. Click your profile icon (bottom left)
3. Settings → Data controls → Export data
4. Download the ZIP file from the email
5. Extract and find `conversations.json`
6. Upload that file to this tool

### Testing
To run the automated tests:
1. Install Node.js (if not already installed)
2. Open terminal in the extracted folder
3. Run: `npm install`
4. Run: `npm test`

### Files Included
- `chatgpt-extractor.html` - Main application
- `index.html` - Homepage
- `chatgpt-extractor-core.js` - Core logic module
- `i18n.js` - Multi-language support
- `service-worker.js` - PWA/offline support
- `manifest.json` - PWA configuration
- `sample-chatgpt-export.json` - Demo data
- Documentation: README.md, USAGE.md, CONTRIBUTING.md
- Tests: tests/chatgpt-extractor.test.js
- Configuration: package.json, jest.config.js

### Troubleshooting
**Problem:** PWA features don't work
**Solution:** Use Option 2 (local server) instead of opening the file directly

**Problem:** File upload doesn't work
**Solution:** Make sure you're uploading the `conversations.json` file from your ChatGPT export

**Problem:** Browser blocks the file
**Solution:** Most modern browsers allow opening local HTML files. Check your browser security settings.

### Privacy & Security
- All processing happens in your browser
- No data is sent to any server
- Works completely offline
- Your conversations never leave your computer

### Support
For issues, questions, or contributions:
- GitHub: https://github.com/SpidermanTotro/-https-SpidermanTotro.github.io-nebula-ultimate-
- Documentation: See USAGE.md and CONTRIBUTING.md files

### License
MIT License - Free to use, modify, and distribute
See LICENSE file for details

---
Nebula Ultimate © 2025
