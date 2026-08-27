import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join, extname } from 'path';

// Mimic the Vercel API handler import
import chatHandler from './api/chat.js';

const PORT = 8080;
const DIST_DIR = join(process.cwd(), 'dist');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.svg': 'image/svg+xml'
};

const server = createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = urlObj.pathname;

  // Handle /api/chat route (Vercel Serverless Function mock)
  if (pathname === '/api/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', async () => {
      req.body = JSON.parse(body || '{}');
      
      // Mock Express-like res object for Vercel functions
      const mockRes = {
        status: function(code) {
          this.statusCode = code;
          return this;
        },
        json: function(data) {
          res.writeHead(this.statusCode || 200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(data));
        }
      };

      await chatHandler(req, mockRes);
    });
    return;
  }

  // Serve static files from /dist
  let relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
  let filePath = join(DIST_DIR, relativePath);
  const ext = extname(filePath);
  
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { 
      'Content-Type': MIME_TYPES[ext] || 'text/plain',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      try {
        const fallback = await readFile(join(DIST_DIR, 'index.html'));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fallback);
      } catch {
        res.writeHead(404);
        res.end('404 Not Found');
      }
    } else {
      res.writeHead(500);
      res.end('500 Internal Server Error');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Development server running at http://localhost:${PORT}`);
  console.log(`(Serving /dist and mimicking Vercel /api routes)`);
});
