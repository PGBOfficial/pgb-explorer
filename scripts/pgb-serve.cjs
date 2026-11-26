// Dependency-free local preview server for the prebuilt Explorer.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../packages/apps/build');
const port = Number(process.env.PORT || 3000);
/** @type {Record<string, string>} */
const mime = { '.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.png':'image/png','.svg':'image/svg+xml','.ico':'image/x-icon','.wasm':'application/wasm','.woff2':'font/woff2' };
if (!fs.existsSync(path.join(root, 'index.html'))) { console.error('Build not found. Run yarn build:www first.'); process.exit(1); }
http.createServer((req,res) => {
  let relative;
  try { relative = decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname); } catch { res.writeHead(400); res.end(); return; }
  const file = path.resolve(root, '.' + (relative === '/' ? '/index.html' : relative));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.stat(file,(error,stat) => {
    if (error || !stat.isFile()) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type':mime[path.extname(file)] || 'application/octet-stream','X-Content-Type-Options':'nosniff','X-Frame-Options':'DENY','Cache-Control':/pgb-config|index.html/.test(file) ? 'no-store' : 'no-cache'});
    fs.createReadStream(file).pipe(res);
  });
}).listen(port,'127.0.0.1',() => console.log(`Persian Gulf Explorer: http://localhost:${port}/#/explorer\nKeep this window open. Press Ctrl+C to stop.`));
