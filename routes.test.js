const request = require('supertest');
const app = require('./server');

// Test GET /api/getcars
describe('GET /api/getcars', () => {
test('It should respond with an array of cars', async () => {
    const response = await request(app).get('/api/getcars');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
    expect(response.body.length).toBeGreaterThan(0);
    });
});

// Test GET /api/insertcars

describe('POST /api/insertcars', () => {
    it('responds with 200 and success message when car is inserted successfully', async () => {
      const newCar = {
    "make": "Supra",
    "model": "Toyota",
    "year": 1994,
    "vin": "1PA4V2BD7J2135698",
    "mileage": 100000,
    "price": 10199.99,
    "status": "available",
    "location": "Santo Domingo, RD"
  }
      const response = await request(app)
        .post('/api/insertcars')
        .set('Content-Type', 'application/json')
        .send(newCar);
        
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('Car inserted successfully');
    });
});

// Test GET /api/updatecars
describe('POST /api/updatecars/10', () => {
    it('responds with 200 and success message when car is inserted successfully', async () => {
      const updatedCar= {
    "status": "unavailable"
  };
      const response = await request(app)
        .post('/api/updatecars/10')
        .send(updatedCar);
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('Car updated successfully');
    });
});

// Test GET /api/searchcars
describe('POST /api/seachcars/10', () => {
  it('responds with 200 and success message when car is existing in database', async () => {
    const response = await request(app)
      .get('/api/searchcars/10')
    expect(response.statusCode).toBe(200);
  });
});
