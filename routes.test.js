const request = require('supertest');
const app = require('./server');


// Test GET /api/cars
describe('GET /api/cars', () => {
test('It should respond with an array of cars', async () => {
    const response = await request(app).get('/api/cars');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
    expect(response.body.length).toBeGreaterThan(0);
    });
});

describe('POST /insertcars', () => {
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
  };
      const response = await request(app)
        .post('/insertcars')
        .send(newCar);
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('Car inserted successfully');
    });
});

describe('POST /updatecars/:id', () => {
    it('responds with 200 and success message when car is inserted successfully', async () => {
      const updatedCar= {
    "status": "unavailable"
  };
      const response = await request(app)
        .post('/updatecars/:id')
        .send(updatedCar);
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('Car updated successfully');
    });
});

describe('DELETE /deletecars/:id', () => {
  it('responds with 200 and success message for valid id', async () => {
    const response = await request(app).delete('/api/deletecars/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Car deleted successfully' });
  });

  it('responds with 400 for invalid id', async () => {
    const response = await request(app).delete('/api/deletecars/invalid_id');
    expect(response.statusCode).toBe(400);
  });
});

