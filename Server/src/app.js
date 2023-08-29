const express = require('express');
const router = require('./routes/index.js');
const server = express();
const morgan = require('morgan');

server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use('/rickandmorty', router);

module.exports = server;




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