const app = require('./src/app');
const session = require('supertest');
const agent = session(app);
const { email, password } = require('./src/utils/login');

describe('Test de RUTAS', () => {
});

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

  // Describe para POST /rickandmorty/fav
  describe('POST /rickandmorty/fav', () => {
    // Primer test
    it('Debería devolver un arreglo que contiene el elemento enviado por body', async () => {
      const response = await agent
        .post('/rickandmorty/fav')
        .send({ characterId: 1 });

      expect(response.status).toBe(200);
      const result = response.body;

      expect(Array.isArray(result)).toBe(true);
      expect(result).toContainEqual({ characterId: 1 });
    });

    // Segundo test
    it('Debería devolver un arreglo que contiene todos los elementos enviados por body', async () => {
      // Primero agregamos un elemento
      await agent.post('/rickandmorty/fav').send({ characterId: 1 });

      // Luego agregamos otro elemento
      const response = await agent.post('/rickandmorty/fav').send({ characterId: 2 });

      expect(response.status).toBe(200);
      const result = response.body;

      expect(Array.isArray(result)).toBe(true);
      expect(result).toContainEqual({ characterId: 1 });
      expect(result).toContainEqual({ characterId: 2 });
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

   describe('DELETE /rickandmorty/fav/:id', () => {
      // Primer test
      it('Si el ID no existe, debe devolver el arreglo sin modificar', async () => {
        // Agregamos un elemento
        await agent.post('/rickandmorty/fav').send({ characterId: 1 });

        // Intentamos eliminar un elemento con un ID que no existe (por ejemplo, 999)
        const response = await agent.delete('/rickandmorty/fav/999');

        expect(response.status).toBe(200);
        const result = response.body;

        expect(Array.isArray(result)).toBe(true);
        expect(result).toContainEqual({ characterId: 1 }); // El elemento debe seguir en el arreglo
      });

      // Segundo test
      it('Si el ID existe, debe eliminar correctamente el personaje', async () => {
        // Agregamos un elemento
        await agent.post('/rickandmorty/fav').send({ characterId: 1 });

        // Eliminamos el elemento con ID 1
        const response = await agent.delete('/rickandmorty/fav/1');

        expect(response.status).toBe(200);
        const result = response.body;

        expect(Array.isArray(result)).toBe(true);
        expect(result).not.toContainEqual({ characterId: 1 }); // El elemento ya no debe estar en el arreglo
      });
    });

