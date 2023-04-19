const request = require('supertest');
const app = require('./server');
const { ConvertPriceUSDtoDOP, 
      CarIs5orLessYearsOld,
      CarsRecommendedMileage} = require('./functions');



// Testing the connection to the api
describe('GET the connection to the API', () => {
  test('It should respond with message "Welcome to my api"', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe("Welcome to my API");
      });
  });

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

// Test GET /api/deletecars
describe('POST /api/updatecars/2', () => {
  it('responds with 200 and success message when car is deleted successfully', async () => {
  const response = await request(app)
    .delete('/api/deletecars/10')
  expect(response.statusCode).toBe(200);
  expect(response.body.message).toBe('Car deleted successfully');
  });
});

// Test GET /api/searchcars
describe('GET /api/searchcars/10', () => {
  it('responds with 404 and error message when car is not existing in database', async () => {
    const response = await request(app)
      .get('/api/searchcars/10')
    expect(response.statusCode).toBe(404);
  });
});

// Test car object
const car = {
  "make": "Honda",
  "model": "Civic",
  "year": 2022,
  "vin": "1HGEJ8140XL027459",
  "mileage": 5000,
  "price": 22000.75,
  "status": "available",
  "location": "456 Elm St, Anytown USA"
  };


// Test of internal functions

// Convert USD price to DOP price
describe('ConvertPriceUSDtoDOP', () => {
  it('converts USD price to DOP', () => {
    expect(ConvertPriceUSDtoDOP(car)).toEqual(1202781);
  });
});

// Car is 5 years old or younger
describe('CarIs5orLessYearsOld', () => {
  it('Check if the car is 5 years old or younger', () => {
    expect(CarIs5orLessYearsOld(car)).toEqual(true);
  });
});

// Recommended car Miliage: 10000 Miles per year
describe('CarsRecommendedMileage', () => {
  it('Check if the car has a recommended miliage', () => {
    expect(CarsRecommendedMileage(car)).toEqual(true);
  });
});

const car2 = {
  "make": "Toyota",
  "model": "Camry",
  "year": 2015,
  "vin": "4T1BF1FK9FU951238",
  "mileage": 35000,
  "price": 18000.50,
  "status": "sold",
  "location": "123 Main St, Anytown USA"
};

// Convert USD price to DOP price with another car
describe('ConvertPriceUSDtoDOP', () => {
  it('converts USD price to DOP', () => {
    expect(ConvertPriceUSDtoDOP(car2)).toEqual(984087);
  });
});

// Car 2 is 5 years old or younger
describe('CarIs5orLessYearsOld', () => {
  it('Check if the car is 5 years old or younger', () => {
    expect(CarIs5orLessYearsOld(car2)).toEqual(false);
  });
});

// Recommended car Miliage: 10000 Miles per year
describe('CarsRecommendedMileage', () => {
  it('Check if the car has a recommended miliage', () => {
    expect(CarsRecommendedMileage(car2)).toEqual(true);
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
      
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Car inserted successfully');
  });
});
