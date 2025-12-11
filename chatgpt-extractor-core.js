/**
 * ChatGPT Extractor Core Module
 * Provides testable business logic for parsing and exporting ChatGPT conversations
 */

const ChatGPTExtractorCore = (function() {
  'use strict';

  /**
   * Extract messages from different conversation formats
   * @param {Object} conversation - Conversation object
   * @returns {Array} Array of message objects
   */
  function extractMessages(conversation) {
    if (!conversation) return [];

    // Handle mapping-based format (new ChatGPT export)
    if (conversation.mapping) {
      const messages = [];
      Object.values(conversation.mapping).forEach(node => {
        if (node.message && 
            node.message.content && 
            node.message.content.parts && 
            node.message.author && 
            node.message.author.role) {
          messages.push({
            role: node.message.author.role,
            content: node.message.content.parts.join('\n'),
            timestamp: node.message.create_time
          });
        }
      });
      return messages;
    }
    
    // Handle simple messages array format
    if (conversation.messages && Array.isArray(conversation.messages)) {
      return conversation.messages;
    }
    
    // Handle single message format
    if (conversation.role && conversation.content) {
      return [conversation];
    }
    
    return [];
  }

  /**
   * Get conversation title
   * @param {Object} conv - Conversation object
   * @param {number} index - Fallback index for unnamed conversations
   * @returns {string} Conversation title
   */
  function getConversationTitle(conv, index = 0) {
    return conv.title || conv.name || `Conversation ${index + 1}`;
  }

  /**
   * Get conversation date
   * @param {Object} conv - Conversation object
   * @returns {string} Formatted date string
   */
  function getConversationDate(conv) {
    const timestamp = conv.create_time || conv.update_time || conv.timestamp;
    if (timestamp) {
      // Handle both Unix timestamps (seconds) and JavaScript timestamps (milliseconds)
      const date = timestamp > 10000000000 ? new Date(timestamp) : new Date(timestamp * 1000);
      return date.toLocaleString();
    }
    return 'Unknown date';
  }

  /**
   * Calculate statistics from conversations data
   * @param {Array} conversationsData - Array of conversation objects
   * @returns {Object} Statistics object
   */
  function calculateStats(conversationsData) {
    let totalMessages = 0;
    let userMessages = 0;
    let assistantMessages = 0;
    let systemMessages = 0;

    conversationsData.forEach(conv => {
      const messages = extractMessages(conv);
      totalMessages += messages.length;
      messages.forEach(msg => {
        if (msg.role === 'user') userMessages++;
        else if (msg.role === 'assistant') assistantMessages++;
        else if (msg.role === 'system') systemMessages++;
      });
    });

    return {
      totalConversations: conversationsData.length,
      totalMessages,
      userMessages,
      assistantMessages,
      systemMessages
    };
  }

  /**
   * Escape HTML to prevent XSS
   * @param {string} text - Text to escape
   * @returns {string} Escaped text
   */
  function escapeHtml(text) {
    if (!text) return '';
    
    // Handle Node.js environment (for testing)
    if (typeof document === 'undefined') {
      return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
    
    // Browser environment
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Format message content with code highlighting
   * @param {string} content - Message content
   * @returns {string} Formatted HTML
   */
  function formatContent(content) {
    if (!content) return '';
    
    let formatted = escapeHtml(content);
    
    // Convert markdown-style code blocks
    formatted = formatted.replace(/```(\w+)?\n([\s\S]*?)```/g, function(match, lang, code) {
      return '<pre><code>' + code + '</code></pre>';
    });
    
    // Convert inline code
    formatted = formatted.replace(/`([^`]+)`/g, function(match, code) {
      return '<code>' + code + '</code>';
    });
    
    // Convert newlines to <br>
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
  }

  /**
   * Search conversations by query
   * @param {Array} conversations - Array of conversations
   * @param {string} query - Search query
   * @returns {Array} Filtered conversations
   */
  function searchConversations(conversations, query) {
    if (!query) return conversations;
    
    const lowerQuery = query.toLowerCase();
    return conversations.filter(conv => {
      const title = getConversationTitle(conv).toLowerCase();
      const messages = extractMessages(conv);
      const hasMatchingMessage = messages.some(msg => 
        msg.content && msg.content.toLowerCase().includes(lowerQuery)
      );
      return title.includes(lowerQuery) || hasMatchingMessage;
    });
  }

  /**
   * Export conversations as JSON
   * @param {Array} conversationsData - Array of conversations
   * @returns {string} JSON string
   */
  function exportAsJSON(conversationsData) {
    return JSON.stringify(conversationsData, null, 2);
  }

  /**
   * Export conversations as plain text
   * @param {Array} conversationsData - Array of conversations
   * @returns {string} Plain text export
   */
  function exportAsText(conversationsData) {
    let text = '';
    conversationsData.forEach((conv, index) => {
      text += `\n${'='.repeat(80)}\n`;
      text += `CONVERSATION ${index + 1}: ${getConversationTitle(conv, index)}\n`;
      text += `Date: ${getConversationDate(conv)}\n`;
      text += `${'='.repeat(80)}\n\n`;

      const messages = extractMessages(conv);
      messages.forEach(msg => {
        if (msg.role && msg.content) {
          text += `[${msg.role.toUpperCase()}]\n`;
          text += `${msg.content}\n\n`;
          text += `${'-'.repeat(40)}\n\n`;
        }
      });
    });
    return text;
  }

  /**
   * Export conversations as Markdown
   * @param {Array} conversationsData - Array of conversations
   * @returns {string} Markdown export
   */
  function exportAsMarkdown(conversationsData) {
    let markdown = '# ChatGPT Export\n\n';
    conversationsData.forEach((conv, index) => {
      markdown += `## ${getConversationTitle(conv, index)}\n\n`;
      markdown += `**Date:** ${getConversationDate(conv)}\n\n`;

      const messages = extractMessages(conv);
      messages.forEach(msg => {
        if (msg.role && msg.content) {
          markdown += `### ${msg.role.charAt(0).toUpperCase() + msg.role.slice(1)}\n\n`;
          markdown += `${msg.content}\n\n`;
          markdown += `---\n\n`;
        }
      });
      markdown += `\n`;
    });
    return markdown;
  }

  /**
   * Export conversations as HTML
   * @param {Array} conversationsData - Array of conversations
   * @returns {string} HTML export
   */
  function exportAsHTML(conversationsData) {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ChatGPT Export</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 900px; margin: 2rem auto; padding: 0 1rem; background: #f5f5f5; }
    .conversation { background: white; padding: 2rem; margin: 2rem 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .title { font-size: 1.5em; font-weight: bold; color: #333; margin-bottom: 0.5em; }
    .meta { color: #666; margin-bottom: 1em; }
    .message { margin: 1.5em 0; padding: 1em; border-radius: 6px; }
    .user { background: #e3f2fd; border-left: 4px solid #2196F3; }
    .assistant { background: #f3e5f5; border-left: 4px solid #9C27B0; }
    .system { background: #fff3e0; border-left: 4px solid #FF9800; }
    .role { font-weight: bold; text-transform: uppercase; font-size: 0.85em; color: #555; margin-bottom: 0.5em; }
    .content { line-height: 1.6; }
    pre { background: #f5f5f5; padding: 1em; border-radius: 4px; overflow-x: auto; }
    code { background: #f0f0f0; padding: 0.2em 0.4em; border-radius: 3px; }
  </style>
</head>
<body>
  <h1>ChatGPT Export</h1>
`;

    conversationsData.forEach((conv, index) => {
      html += `  <div class="conversation">
    <div class="title">${escapeHtml(getConversationTitle(conv, index))}</div>
    <div class="meta">${getConversationDate(conv)}</div>
`;
      const messages = extractMessages(conv);
      messages.forEach(msg => {
        if (msg.role && msg.content) {
          html += `    <div class="message ${msg.role}">
      <div class="role">${msg.role}</div>
      <div class="content">${formatContent(msg.content)}</div>
    </div>
`;
        }
      });
      html += `  </div>\n`;
    });

    html += `</body>
</html>`;
    return html;
  }

  /**
   * Process export data and handle different formats
   * @param {Object|Array} data - Raw export data
   * @returns {Array} Array of conversations
   */
  function processExportData(data) {
    if (!data) {
      throw new Error('No data provided');
    }

    // Handle different ChatGPT export formats
    let conversations;
    
    if (Array.isArray(data)) {
      conversations = data;
    } else if (data.conversations && Array.isArray(data.conversations)) {
      conversations = data.conversations;
    } else if (typeof data === 'object') {
      // Single conversation object
      conversations = [data];
    } else {
      conversations = [];
    }
    
    if (conversations.length === 0) {
      throw new Error('No conversations found in the export file');
    }

    return conversations;
  }

  // Public API
  return {
    extractMessages,
    getConversationTitle,
    getConversationDate,
    calculateStats,
    escapeHtml,
    formatContent,
    searchConversations,
    exportAsJSON,
    exportAsText,
    exportAsMarkdown,
    exportAsHTML,
    processExportData
  };
})();

// Export for Node.js/Jest testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ChatGPTExtractorCore;
}
