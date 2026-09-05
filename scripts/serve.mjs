import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve(process.argv[2] || '.');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png' };
http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (!['/', '/index.html', '/styles.css', '/app.js'].includes(pathname) && !pathname.startsWith('/assets/')) {
      res.writeHead(404).end('Not found'); return;
    }
    if (pathname.includes('\\') || pathname.split('/').some((part) => part === '..' || part.startsWith('.'))) {
      res.writeHead(404).end('Not found'); return;
    }
    let file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    if (root === path.resolve('.') && pathname.startsWith('/assets/')) file = path.resolve('public', '.' + pathname);
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404).end('Not found'); }
}).listen(4173, '127.0.0.1', () => console.log('Portfolio: http://127.0.0.1:4173'));
