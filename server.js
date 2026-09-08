const http = require('http');
const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'posts.json');
const PUBLIC_DIR = path.join(__dirname, 'public');

// Ensure DB exists
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

const SECRET_KEY = "x7F9kL2mP5vR8wQ1tY4bN6cH3jD0sZ"; // 30 character key

const server = http.createServer((req, res) => {
    // API to get posts
    if (req.method === 'GET' && req.url === '/api/posts') {
        const posts = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(posts));
    }

    // API to create a post
    if (req.method === 'POST' && req.url === '/api/publish') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            const data = JSON.parse(body);
            if (data.key !== SECRET_KEY) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: "Invalid password key!" }));
            }
            
            const posts = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
            const newPost = {
                id: Date.now(),
                title: data.title,
                content: data.content,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            };
            
            posts.unshift(newPost); // Add to top
            fs.writeFileSync(DB_FILE, JSON.stringify(posts, null, 2));
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true }));
        });
        return;
    }

    // API to edit a post
    if (req.method === 'PUT' && req.url.startsWith('/api/publish/')) {
        const id = parseInt(req.url.split('/').pop());
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            const data = JSON.parse(body);
            if (data.key !== SECRET_KEY) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: "Invalid password key!" }));
            }
            
            const posts = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
            const postIndex = posts.findIndex(p => p.id === id);
            
            if (postIndex === -1) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: "Post not found!" }));
            }
            
            posts[postIndex].title = data.title;
            posts[postIndex].content = data.content;
            
            fs.writeFileSync(DB_FILE, JSON.stringify(posts, null, 2));
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true }));
        });
        return;
    }

    // API to delete a post
    if (req.method === 'DELETE' && req.url.startsWith('/api/publish/')) {
        const id = parseInt(req.url.split('/').pop());
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            const data = JSON.parse(body);
            if (data.key !== SECRET_KEY) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: "Invalid password key!" }));
            }
            
            let posts = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
            const initialLength = posts.length;
            posts = posts.filter(p => p.id !== id);
            
            if (posts.length === initialLength) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: "Post not found!" }));
            }
            
            fs.writeFileSync(DB_FILE, JSON.stringify(posts, null, 2));
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true }));
        });
        return;
    }

    // Serve static files
    const parsedUrl = req.url.split('?')[0];
    let filePath = path.join(PUBLIC_DIR, parsedUrl === '/' ? 'index.html' : parsedUrl);
    if (parsedUrl === '/publish') filePath = path.join(PUBLIC_DIR, 'publish.html');
    if (parsedUrl.startsWith('/post')) filePath = path.join(PUBLIC_DIR, 'post.html');
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json'
    };
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
