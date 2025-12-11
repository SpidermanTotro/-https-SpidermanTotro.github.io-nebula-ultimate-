# ChatGPT Export Extractor - Usage Guide

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Exporting from ChatGPT](#exporting-from-chatgpt)
- [Using the Extractor](#using-the-extractor)
- [Features](#features)
- [Export Formats](#export-formats)
- [Tips and Best Practices](#tips-and-best-practices)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)

## Introduction

The ChatGPT Export Extractor is a client-side tool that allows you to parse, analyze, and export your ChatGPT conversation history in various formats. All processing happens in your browser - no data is sent to any server.

## Getting Started

### Quick Start

1. Visit [ChatGPT Export Extractor](https://spidermantotro.github.io/-https-SpidermanTotro.github.io-nebula-ultimate-/chatgpt-extractor.html)
2. Click "Try Demo Data" to see how it works with sample conversations
3. Or upload your own `conversations.json` file

### System Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- No internet connection required after initial page load

## Exporting from ChatGPT

Follow these steps to export your ChatGPT conversations:

1. Go to [ChatGPT](https://chat.openai.com)
2. Click your profile icon (bottom left corner)
3. Select "Settings"
4. Navigate to "Data controls" → "Export data"
5. Click "Export"
6. Wait for an email from OpenAI (usually within a few minutes to 24 hours)
7. Download the ZIP file from the email link
8. Extract the ZIP file
9. Locate the `conversations.json` file

## Using the Extractor

### Uploading Your Data

1. Click the "Choose File" button
2. Select your `conversations.json` file
3. The tool will automatically parse and display your conversations

### Navigation

- **Search**: Use the search box to filter conversations by title or content
- **Statistics**: View conversation and message counts at the top
- **Conversations**: Scroll through your conversation list
- **Messages**: Each conversation shows all messages with role indicators

### Keyboard Shortcuts

- `Tab` - Navigate between interactive elements
- `Enter` - Activate buttons
- `Escape` - Clear search (when focused on search box)

## Features

### Statistics Dashboard

View important metrics about your conversations:
- Total number of conversations
- Total messages count
- User messages count
- Assistant responses count

### Real-time Search

Search across all conversations:
- Search by conversation title
- Search by message content
- Case-insensitive matching
- Instant results as you type

### Multiple Export Formats

Export your data in various formats:

#### JSON
- Full data preservation
- Programmatically accessible
- Easy to import into other tools

#### Plain Text
- Human-readable format
- Easy to view in any text editor
- Good for archiving

#### Markdown
- Formatted for documentation
- Compatible with GitHub, Notion, etc.
- Preserves code blocks and formatting

#### HTML
- Standalone web page
- Styled for readability
- Can be opened in any browser

### Accessibility Features

- Full keyboard navigation
- Screen reader support
- High contrast mode compatible
- ARIA labels for all interactive elements
- Semantic HTML structure

### Mobile Support

- Responsive design works on all screen sizes
- Touch-friendly interface
- Optimized for mobile browsers
- Works offline after initial load

### Multi-language Support

Currently supported languages:
- English (en)
- Spanish (es)
- French (fr)

Change language using the language selector in the top-right corner.

## Export Formats

### JSON Export

```json
[
  {
    "title": "Conversation Title",
    "create_time": 1701234567,
    "messages": [
      {
        "role": "user",
        "content": "Question"
      },
      {
        "role": "assistant",
        "content": "Answer"
      }
    ]
  }
]
```

### Text Export

```
================================================================================
CONVERSATION 1: Conversation Title
Date: 11/29/2023, 12:34:56 PM
================================================================================

[USER]
Question

----------------------------------------

[ASSISTANT]
Answer

----------------------------------------
```

### Markdown Export

```markdown
# ChatGPT Export

## Conversation Title

**Date:** 11/29/2023, 12:34:56 PM

### User

Question

---

### Assistant

Answer

---
```

### HTML Export

A fully styled HTML document that can be opened in any browser, preserving all formatting and code blocks.

## Tips and Best Practices

### Performance with Large Files

- The tool can handle thousands of conversations
- Search functionality works efficiently with large datasets
- Consider exporting specific conversations if you have many

### Data Privacy

- All processing happens in your browser
- No data is uploaded to any server
- Safe to use with sensitive conversations
- Close the page to remove data from memory

### Searching Effectively

- Use specific keywords for better results
- Search works on both titles and content
- Combine multiple searches to narrow results

### Exporting

- JSON: Best for data backup and importing elsewhere
- Text: Best for quick reading and archiving
- Markdown: Best for documentation and sharing
- HTML: Best for formatted viewing offline

## Troubleshooting

### File Won't Upload

**Problem**: The file upload doesn't work

**Solutions**:
- Ensure the file is named `conversations.json`
- Check that the file is valid JSON
- Try the demo data first to verify the tool works
- Clear browser cache and try again

### Parse Error

**Problem**: "Error parsing JSON" message appears

**Solutions**:
- Verify the file is from ChatGPT export
- Check the file isn't corrupted
- Make sure the entire download completed
- Try re-downloading the export

### No Conversations Found

**Problem**: "No conversations found" message appears

**Solutions**:
- Verify you uploaded the correct file
- Check if your ChatGPT account has any conversations
- Ensure the export completed successfully

### Search Not Working

**Problem**: Search doesn't return expected results

**Solutions**:
- Check spelling
- Try broader search terms
- Clear search and try again
- Refresh the page and reload data

### Export Button Doesn't Work

**Problem**: Export buttons don't download files

**Solutions**:
- Check browser's download settings
- Ensure pop-ups aren't blocked
- Try a different browser
- Check available disk space

## FAQ

### Is my data safe?

Yes! All processing happens locally in your browser. No data is sent to any server.

### What browsers are supported?

All modern browsers: Chrome, Firefox, Safari, Edge, Opera. We recommend using the latest version.

### Can I use this offline?

After the initial page load, the tool works offline. However, you need an internet connection to initially load the page.

### How large files can I process?

The tool can handle very large files (thousands of conversations). Performance depends on your device's memory and processing power.

### Can I export only specific conversations?

Currently, exports include all loaded conversations. Use the search feature to filter, then export the results.

### What if my export format isn't supported?

The JSON format preserves all data and can be used with other tools. If you need a specific format, consider contributing to the project!

### Is this open source?

Yes! The project is open source. Check the [GitHub repository](https://github.com/SpidermanTotro/-https-SpidermanTotro.github.io-nebula-ultimate-) to contribute.

### Can I use this for other chat exports?

Currently optimized for ChatGPT exports. Support for other platforms may be added in the future.

## Need More Help?

- [Open an issue](https://github.com/SpidermanTotro/-https-SpidermanTotro.github.io-nebula-ultimate-/issues) on GitHub
- Check the [Contributing Guide](CONTRIBUTING.md) to help improve the tool
- Visit the [main website](https://spidermantotro.github.io/-https-SpidermanTotro.github.io-nebula-ultimate-/) for more information

---

**Last Updated**: December 2025
