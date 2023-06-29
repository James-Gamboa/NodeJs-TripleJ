const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    const htmlFile = fs.readFileSync('index.html', 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(htmlFile);
  } else if (url === "/contact.html") {
    const htmlContactFile = fs.readFileSync('contact.html', 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(htmlContactFile);
  } else if (url === "/about.html") {
    const htmlAboutFile = fs.readFileSync('about.html', 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(htmlAboutFile);
  } else if (url === "/index.html") { 
    const htmlIndexFile = fs.readFileSync('index.html', 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(htmlIndexFile);
  } else {
    const notFoundHtmlFile = fs.readFileSync('notfound.html', 'utf8');
    res.statusCode = 404;
    res.end(notFoundHtmlFile);
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
