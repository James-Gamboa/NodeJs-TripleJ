const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Obtener la ruta solicitada por el cliente
  const url = req.url;

  // Manejar la ruta específica
  if (url === "/") {
    // Leer el archivo HTML correspondiente a la ruta específica
    const htmlFile = fs.readFileSync('index.html', 'utf8');
    // Configurar las cabeceras de la respuesta
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    // Enviar el contenido del archivo HTML como respuesta
    res.end(htmlFile);
  } else if (url === "/contact.html") {
    // Leer el archivo HTML correspondiente a la ruta específica
    const htmlContactFile = fs.readFileSync('contact.html', 'utf8');
    // Configurar las cabeceras de la respuesta
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    // Enviar el contenido del archivo HTML como respuesta
    res.end(htmlContactFile);
  } else if (url === "/about.html") {
    // Leer el archivo HTML correspondiente a la ruta específica
    const htmlAboutFile = fs.readFileSync('about.html', 'utf8');
    // Configurar las cabeceras de la respuesta
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    // Enviar el contenido del archivo HTML como respuesta
    res.end(htmlAboutFile);
  } else if (url === "/index.html") { 
    // Leer el archivo HTML correspondiente a la ruta específica
    const htmlIndexFile = fs.readFileSync('index.html', 'utf8');
    // Configurar las cabeceras de la respuesta
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    // Enviar el contenido del archivo HTML como respuesta
    res.end(htmlIndexFile);
  } else {
    const notFoundHtmlFile = fs.readFileSync('notfound.html', 'utf8');
    // Manejar otras rutas o devolver una respuesta por defecto
    res.statusCode = 404; // Estado: Intentando buscar un elemento que no existe
    res.end(notFoundHtmlFile);
  }
});

// Escuchar en un puerto específico
const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});