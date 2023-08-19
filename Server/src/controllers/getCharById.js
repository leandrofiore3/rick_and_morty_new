const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const charId = req.params.id;

  try {
    const response = await axios.get(`${URL}${charId}`);
    const character = response.data;

    if (character.error) {
      res.status(404).json({ message: 'Not found' });
    } else {
      const { id, status, name, species, origin, image, gender } = character;
      res.json({ id, status, name, species, origin, image, gender });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;





//**********************PRIMER FORMA QUE HICE SERVIDOR********************** */
// const axios = require('axios');

// const getCharById = (res, id) => {
//   const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

//   axios.get(apiUrl)
//     .then(response => {
//       // Obtén los datos relevantes de la respuesta
//       const {id, name, gender, species, origin, image, status} = response.data;
//       // Crea un objeto con los datos relevantes
//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status
//       };
//       // Devuelve una respuesta en formato JSON con el personaje
//       return res
//       .writeHead(200, { 'Content-Type': 'application/json' })
//       .end(JSON.stringify(character));
//     })
//     .catch(error => {
//       return res.writeHead(500, { 'Content-Type': 'text/plain' }).end(error.message);
//     });
// };

// module.exports = getCharById;

