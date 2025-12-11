/**
 * @jest-environment jsdom
 */

const ChatGPTExtractorCore = require('../chatgpt-extractor-core.js');

describe('ChatGPT Extractor Core', () => {
  
  describe('extractMessages', () => {
    it('should extract messages from mapping-based format', () => {
      const conversation = {
        title: 'Test Conversation',
        mapping: {
          msg1: {
            message: {
              author: { role: 'user' },
              content: { parts: ['Hello'] },
              create_time: 1701234567
            }
          },
          msg2: {
            message: {
              author: { role: 'assistant' },
              content: { parts: ['Hi there!'] },
              create_time: 1701234600
            }
          }
        }
      };

      const messages = ChatGPTExtractorCore.extractMessages(conversation);
      
      expect(messages).toHaveLength(2);
      expect(messages[0].role).toBe('user');
      expect(messages[0].content).toBe('Hello');
      expect(messages[1].role).toBe('assistant');
      expect(messages[1].content).toBe('Hi there!');
    });

    it('should extract messages from simple messages array format', () => {
      const conversation = {
        messages: [
          { role: 'user', content: 'Question' },
          { role: 'assistant', content: 'Answer' }
        ]
      };

      const messages = ChatGPTExtractorCore.extractMessages(conversation);
      
      expect(messages).toHaveLength(2);
      expect(messages[0].role).toBe('user');
      expect(messages[0].content).toBe('Question');
    });

    it('should handle single message format', () => {
      const conversation = {
        role: 'user',
        content: 'Single message'
      };

      const messages = ChatGPTExtractorCore.extractMessages(conversation);
      
      expect(messages).toHaveLength(1);
      expect(messages[0].role).toBe('user');
    });

    it('should return empty array for null or invalid conversation', () => {
      expect(ChatGPTExtractorCore.extractMessages(null)).toEqual([]);
      expect(ChatGPTExtractorCore.extractMessages({})).toEqual([]);
      expect(ChatGPTExtractorCore.extractMessages(undefined)).toEqual([]);
    });

    it('should join multi-part content with newlines', () => {
      const conversation = {
        mapping: {
          msg1: {
            message: {
              author: { role: 'user' },
              content: { parts: ['Part 1', 'Part 2', 'Part 3'] },
              create_time: 1701234567
            }
          }
        }
      };

      const messages = ChatGPTExtractorCore.extractMessages(conversation);
      
      expect(messages[0].content).toBe('Part 1\nPart 2\nPart 3');
    });
  });

  describe('getConversationTitle', () => {
    it('should return title if present', () => {
      const conv = { title: 'My Conversation' };
      expect(ChatGPTExtractorCore.getConversationTitle(conv)).toBe('My Conversation');
    });

    it('should return name if title not present', () => {
      const conv = { name: 'Named Conversation' };
      expect(ChatGPTExtractorCore.getConversationTitle(conv)).toBe('Named Conversation');
    });

    it('should return default title with index if no title or name', () => {
      const conv = {};
      expect(ChatGPTExtractorCore.getConversationTitle(conv, 5)).toBe('Conversation 6');
    });

    it('should default to index 0 if not provided', () => {
      const conv = {};
      expect(ChatGPTExtractorCore.getConversationTitle(conv)).toBe('Conversation 1');
    });
  });

  describe('getConversationDate', () => {
    it('should format Unix timestamp (seconds)', () => {
      const conv = { create_time: 1701234567 };
      const date = ChatGPTExtractorCore.getConversationDate(conv);
      expect(date).toContain('2023');
    });

    it('should format JavaScript timestamp (milliseconds)', () => {
      const conv = { create_time: 1701234567000 };
      const date = ChatGPTExtractorCore.getConversationDate(conv);
      expect(date).toContain('2023');
    });

    it('should use update_time if create_time not present', () => {
      const conv = { update_time: 1701234567 };
      const date = ChatGPTExtractorCore.getConversationDate(conv);
      expect(date).toBeTruthy();
    });

    it('should return "Unknown date" if no timestamp', () => {
      const conv = {};
      expect(ChatGPTExtractorCore.getConversationDate(conv)).toBe('Unknown date');
    });
  });

  describe('calculateStats', () => {
    it('should calculate statistics correctly', () => {
      const conversations = [
        {
          mapping: {
            msg1: {
              message: {
                author: { role: 'user' },
                content: { parts: ['Question'] }
              }
            },
            msg2: {
              message: {
                author: { role: 'assistant' },
                content: { parts: ['Answer'] }
              }
            },
            msg3: {
              message: {
                author: { role: 'system' },
                content: { parts: ['System message'] }
              }
            }
          }
        },
        {
          messages: [
            { role: 'user', content: 'Another question' },
            { role: 'assistant', content: 'Another answer' }
          ]
        }
      ];

      const stats = ChatGPTExtractorCore.calculateStats(conversations);
      
      expect(stats.totalConversations).toBe(2);
      expect(stats.totalMessages).toBe(5);
      expect(stats.userMessages).toBe(2);
      expect(stats.assistantMessages).toBe(2);
      expect(stats.systemMessages).toBe(1);
    });

    it('should handle empty conversations array', () => {
      const stats = ChatGPTExtractorCore.calculateStats([]);
      
      expect(stats.totalConversations).toBe(0);
      expect(stats.totalMessages).toBe(0);
      expect(stats.userMessages).toBe(0);
      expect(stats.assistantMessages).toBe(0);
    });
  });

  describe('escapeHtml', () => {
    it('should escape HTML special characters', () => {
      expect(ChatGPTExtractorCore.escapeHtml('<script>alert("xss")</script>'))
        .toBe('&lt;script&gt;alert("xss")&lt;/script&gt;');
      
      expect(ChatGPTExtractorCore.escapeHtml('A & B'))
        .toBe('A &amp; B');
      
      expect(ChatGPTExtractorCore.escapeHtml('"quoted"'))
        .toBe('"quoted"');
    });

    it('should handle null and empty strings', () => {
      expect(ChatGPTExtractorCore.escapeHtml(null)).toBe('');
      expect(ChatGPTExtractorCore.escapeHtml('')).toBe('');
      expect(ChatGPTExtractorCore.escapeHtml(undefined)).toBe('');
    });
  });

  describe('formatContent', () => {
    it('should convert code blocks to HTML', () => {
      const content = 'Some text\n```python\nprint("hello")\n```\nMore text';
      const formatted = ChatGPTExtractorCore.formatContent(content);
      
      expect(formatted).toContain('<pre><code>');
      expect(formatted).toContain('print("hello")');
      expect(formatted).toContain('</code></pre>');
    });

    it('should convert inline code to HTML', () => {
      const content = 'Use the `console.log()` function';
      const formatted = ChatGPTExtractorCore.formatContent(content);
      
      expect(formatted).toContain('<code>console.log()</code>');
    });

    it('should convert newlines to <br>', () => {
      const content = 'Line 1\nLine 2\nLine 3';
      const formatted = ChatGPTExtractorCore.formatContent(content);
      
      expect(formatted).toContain('<br>');
      expect((formatted.match(/<br>/g) || []).length).toBeGreaterThanOrEqual(2);
    });

    it('should escape HTML before formatting', () => {
      const content = '<script>alert("xss")</script>';
      const formatted = ChatGPTExtractorCore.formatContent(content);
      
      expect(formatted).toContain('&lt;script&gt;');
      expect(formatted).not.toContain('<script>');
    });

    it('should handle null and empty content', () => {
      expect(ChatGPTExtractorCore.formatContent(null)).toBe('');
      expect(ChatGPTExtractorCore.formatContent('')).toBe('');
    });
  });

  describe('searchConversations', () => {
    const conversations = [
      {
        title: 'Python Tutorial',
        mapping: {
          msg1: {
            message: {
              author: { role: 'user' },
              content: { parts: ['How do I use Python?'] }
            }
          }
        }
      },
      {
        title: 'JavaScript Guide',
        messages: [
          { role: 'user', content: 'Explain async/await in JavaScript' }
        ]
      },
      {
        title: 'CSS Tips',
        messages: [
          { role: 'user', content: 'How to center a div?' }
        ]
      }
    ];

    it('should filter conversations by title', () => {
      const results = ChatGPTExtractorCore.searchConversations(conversations, 'Python');
      expect(results).toHaveLength(1);
      expect(results[0].title).toBe('Python Tutorial');
    });

    it('should filter conversations by message content', () => {
      const results = ChatGPTExtractorCore.searchConversations(conversations, 'async');
      expect(results).toHaveLength(1);
      expect(results[0].title).toBe('JavaScript Guide');
    });

    it('should be case insensitive', () => {
      const results = ChatGPTExtractorCore.searchConversations(conversations, 'python');
      expect(results).toHaveLength(1);
    });

    it('should return all conversations if query is empty', () => {
      const results = ChatGPTExtractorCore.searchConversations(conversations, '');
      expect(results).toHaveLength(3);
    });

    it('should return empty array if no matches', () => {
      const results = ChatGPTExtractorCore.searchConversations(conversations, 'nonexistent');
      expect(results).toHaveLength(0);
    });
  });

  describe('exportAsJSON', () => {
    it('should export conversations as formatted JSON', () => {
      const conversations = [
        { title: 'Test', messages: [] }
      ];
      const json = ChatGPTExtractorCore.exportAsJSON(conversations);
      
      expect(json).toContain('"title": "Test"');
      expect(() => JSON.parse(json)).not.toThrow();
    });
  });

  describe('exportAsText', () => {
    it('should export conversations as plain text', () => {
      const conversations = [
        {
          title: 'Test Conversation',
          create_time: 1701234567,
          messages: [
            { role: 'user', content: 'Hello' },
            { role: 'assistant', content: 'Hi there!' }
          ]
        }
      ];
      const text = ChatGPTExtractorCore.exportAsText(conversations);
      
      expect(text).toContain('CONVERSATION 1: Test Conversation');
      expect(text).toContain('[USER]');
      expect(text).toContain('Hello');
      expect(text).toContain('[ASSISTANT]');
      expect(text).toContain('Hi there!');
    });
  });

  describe('exportAsMarkdown', () => {
    it('should export conversations as Markdown', () => {
      const conversations = [
        {
          title: 'Test Conversation',
          messages: [
            { role: 'user', content: 'Hello' }
          ]
        }
      ];
      const markdown = ChatGPTExtractorCore.exportAsMarkdown(conversations);
      
      expect(markdown).toContain('# ChatGPT Export');
      expect(markdown).toContain('## Test Conversation');
      expect(markdown).toContain('### User');
      expect(markdown).toContain('Hello');
    });
  });

  describe('exportAsHTML', () => {
    it('should export conversations as HTML document', () => {
      const conversations = [
        {
          title: 'Test Conversation',
          messages: [
            { role: 'user', content: 'Hello' }
          ]
        }
      ];
      const html = ChatGPTExtractorCore.exportAsHTML(conversations);
      
      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain('<title>ChatGPT Export</title>');
      expect(html).toContain('Test Conversation');
      expect(html).toContain('Hello');
    });

    it('should escape HTML in conversation content', () => {
      const conversations = [
        {
          title: '<script>alert("xss")</script>',
          messages: [
            { role: 'user', content: '<script>alert("xss")</script>' }
          ]
        }
      ];
      const html = ChatGPTExtractorCore.exportAsHTML(conversations);
      
      expect(html).toContain('&lt;script&gt;');
      expect(html).not.toContain('<script>alert("xss")</script>');
    });
  });

  describe('processExportData', () => {
    it('should handle array of conversations', () => {
      const data = [
        { title: 'Conv 1' },
        { title: 'Conv 2' }
      ];
      const result = ChatGPTExtractorCore.processExportData(data);
      
      expect(result).toHaveLength(2);
      expect(result).toBe(data);
    });

    it('should handle object with conversations property', () => {
      const data = {
        conversations: [
          { title: 'Conv 1' },
          { title: 'Conv 2' }
        ]
      };
      const result = ChatGPTExtractorCore.processExportData(data);
      
      expect(result).toHaveLength(2);
      expect(result).toBe(data.conversations);
    });

    it('should handle single conversation object', () => {
      const data = { title: 'Single Conv' };
      const result = ChatGPTExtractorCore.processExportData(data);
      
      expect(result).toHaveLength(1);
      expect(result[0]).toBe(data);
    });

    it('should throw error for null data', () => {
      expect(() => ChatGPTExtractorCore.processExportData(null))
        .toThrow('No data provided');
    });

    it('should throw error for empty conversations', () => {
      expect(() => ChatGPTExtractorCore.processExportData([]))
        .toThrow('No conversations found');
      
      expect(() => ChatGPTExtractorCore.processExportData({ conversations: [] }))
        .toThrow('No conversations found');
    });
  });
});
