const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const { email, password } = require('../src/utils/login');

describe('Test de RUTAS', () => {
  describe('GET /rickandmorty/character/:id', () => {
    // PRIMER TEST
    it('Responde con status: 200', async () => {
      await agent.get('/rickandmorty/character/1').expect(200);
    });

    // SEGUNDO TEST
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get('/rickandmorty/character/1');
      expect(response.status).toBe(200); // Asegura que la respuesta sea exitosa
      const character = response.body; // Obtén el objeto del cuerpo de la respuesta
      expect(character).toHaveProperty('id');
      expect(character).toHaveProperty('name');
      expect(character).toHaveProperty('species');
      expect(character).toHaveProperty('gender');
      expect(character).toHaveProperty('status');
      expect(character).toHaveProperty('origin');
      expect(character).toHaveProperty('image');
    });
  it('Si hay un error responde con status: 500', async () => {
    await agent.get('/rickandmorty/character/0').expect(500);// Si el ID es 0, responde con status 500
    await agent.get('/rickandmorty/character/827').expect(500);// Si el ID es 827, responde con status 500
    await agent.get('/rickandmorty/character/abc').expect(500);// Si el ID es "abc", responde con status 500

  });
  })

  describe('GET /rickandmorty/character', () => {
    it('Responde con status: 200', async () => {
      await agent.get('/rickandmorty/character').expect(200);
    });

    it('Responde un array de personajes', async () => {
      const response = await agent.get('/rickandmorty/character');
      expect(response.status).toBe(200);
      const characters = response.body;
      expect(Array.isArray(characters)).toBeTruthy();
    });
  });

  describe('GET /rickandmorty/login', () => {
    // PRIMER TEST
    it('Debería retornar access: true si las credenciales son correctas', async () => {
      const response = await agent.get('/rickandmorty/login?email=correo@ejemplo.com&password=contraseña');
      expect(response.status).toBe(200); // Asegura que la respuesta sea exitosa
      const result = response.body;
      expect(result).toEqual({ access: true });
    });
    // SEGUNDO TEST
    it('Debería retornar access: false si las credenciales son incorrectas', async () => {
      const response = await agent.get('/rickandmorty/login?email=correoincorrecto@ejemplo.com&password=contraseñaincorrecta');
      expect(response.status).toBe(200); // Asegura que la respuesta sea exitosa
      const result = response.body;
      expect(result).toEqual({ access: false });
    });
  });

});
