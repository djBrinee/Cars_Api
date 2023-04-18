export function ConvertPriceUSDtoDOP(car){
    return car.price*54.67
}

function CarIs5orLessYearsOld(car){
    const currentYear = new Date().getFullYear();
    if(car.year >= currentYear - 5){
        return true
    }
    else{
        return false
    }
}

function CarsRecommendedMileage(car){
    const currentYear = new Date().getFullYear();
    if(car.mileage / (currentYear - car.year) <= 10000){
        return true
    }
    else{
        return false
    }
}

let car = {
    "make": "Honda",
    "model": "Civic",
    "year": 2022,
    "vin": "1HGEJ8140XL027459",
    "mileage": 5000,
    "price": 22000.75,
    "status": "available",
    "location": "456 Elm St, Anytown USA"
}

