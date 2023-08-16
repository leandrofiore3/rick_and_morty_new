const axios = require('axios');

const getCharById = (res, id) => {
  const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

  axios.get(apiUrl)
    .then(response => {
      // Obtén los datos relevantes de la respuesta
      const {id, name, gender, species, origin, image, status} = response.data;

      // Crea un objeto con los datos relevantes
      const character = {
        id,
        name,
        gender,
        species,
        origin: origin.name,
        image,
        status
      };

      // Devuelve una respuesta en formato JSON con el personaje
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
    })
    .catch(error => {
      res.status(500).set('Content-Type', 'text/plain').send(error.message);
    });
};

module.exports = getCharById;

