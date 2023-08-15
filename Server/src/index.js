const http = require('http');
const url = require('url');
const data = require('./utils/data'); // Asumiendo que el archivo data.js está en la misma ubicación

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;

  if (pathName.startsWith('/rickandmorty/character/')) {
    const parts = pathName.split('/');// Separar la URL por cada /
    const id = parts[3]; // Obtener el id del último segmento de la URL
    const characterId = parseInt(id);// Convertir el id a un número entero

    const character = data.find(character => character.id === characterId);

    if (character) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(character));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end(JSON.stringify({error: 'Character not found'}));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
     return res.end('Not found');
  }
});

server.listen(3001, "localhost");
