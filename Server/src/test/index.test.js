const app = require('../app');
const session = require('supertest');
const request = session(app);

const character = {
  id: 923,
  name: 'Leandro',
  species: 'Human',
  gender: 'Male',
  status: 'Alive',
  origin: {
    name: 'Earth (C-137)',
  },
  image: 'image.jpg'
};

describe('Test de RUTAS', () => {

  describe('GET /rickandmorty/character/:id', () => {
    // PRIMER TEST
    it('Responde con status: 200', async () => {
      const response = await request.get('/rickandmorty/character/1');
      expect(response.status).toBe(200); // Asegura que la respuesta sea exitosa
    });
    // SEGUNDO TEST
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await request.get('/rickandmorty/character/1');
      for(const prop in character) {
        expect(response.body).toHaveProperty(prop);
      }
    });

  it('Si hay un error responde con status: 500', async () => {
    const response = await request.get('/rickandmorty/character/51218j');
    expect(response.status).toBe(500);
  });
  });
  

  describe('GET /rickandmorty/login', () => {
    // PRIMER TEST
    it('Debería retornar access: true si las credenciales son correctas', async () => {
      const response = await request.get('/rickandmorty/login?email=leandro@gmail.com&password=123asd');
      expect(response.status).toBe(200); // Asegura que la respuesta sea exitosa
      const result = response.body;
      expect(result).toEqual({ access: true });
    });
    // SEGUNDO TEST
    it('Debería retornar access: false si las credenciales son incorrectas', async () => {
      const response = await request.get('/rickandmorty/login?email=correoincorrecto@ejemplo.com&password=contraseñaincorrecta');
      expect(response.status).toBe(200); // Asegura que la respuesta sea exitosa
      const result = response.body;
      expect(result).toEqual({ access: false });
    });
  });

  // Describe para POST /rickandmorty/fav
  describe('POST /rickandmorty/fav', () => {
    // Primer test
    it('Debe guardar el personaje en favoritos', async () => {
      const response = await request.post('/rickandmorty/fav')
      .send(character);
      expect(response.body).toContainEqual(character);
    });
    // Segundo test
    it('Debe agregar personajes a favoritos sin eliminar los existentes', async () => {
      character.id = 1923;
      character.name = 'Pedro pablo';
      const response = await request.post('/rickandmorty/fav')
      .send(character);
      expect(response.body.lenght).toBe(2);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el ID solicitado no existe, devuelve un arreglo con todos los favoritos", async () => {
      const response = await request.delete("/rickandmorty/fav/djsakg45");
      expect(response.body.lenght).toBe(2);
    })
    it("Si el ID solicitado existe, deberia eliminarlo de favoritos", async () => {
      const response = await request.delete("/rickandmorty/fav/1923");
      expect(response.body.lenght).toBe(1);
    })
  })

});

