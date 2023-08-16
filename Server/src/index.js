const http = require('http');
const url = require('url');
const getCharById = require('./controllers/getCharById');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;

  if (pathName.includes('/rickandmorty/character')) {
    const parts = pathName.split('/');
    const id = parts[parts.length - 1]; // Obtener el último segmento de la URL como id
    const characterId = parseInt(id);

    getCharById(res, characterId); // Llama al controlador getCharById con los parámetros requeridos
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(3001, "localhost");


