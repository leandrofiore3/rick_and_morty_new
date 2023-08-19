const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));











//**********************PRIMER FORMA QUE HICE SERVIDOR********************** */

// const http = require('http');
// const url = require('url');
// const getCharById = require('./controllers/getCharById');

// const server = http.createServer((req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   const parsedUrl = url.parse(req.url, true);
//   const pathName = parsedUrl.pathname;

//   if (pathName.includes('/rickandmorty/character')) {
//     const id = pathName.split('/').at(-1);
//     const characterId = parseInt(id);

//     getCharById(res, characterId); // Llama al controlador getCharById con los parámetros requeridos
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not found');
//   }
// });

// server.listen(3001, "localhost");


