const request = require('supertest');
const app = require('./server');

describe('Test the getcars endpoint', () => {
  test('It should respond with an array of cars', async () => {
    const response = await request(app).get('/api/getcars');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});


