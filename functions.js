function ConvertPriceUSDtoDOP(car){
    return Math.round(car.price*54.67)
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

module.exports = { ConvertPriceUSDtoDOP, CarIs5orLessYearsOld, CarsRecommendedMileage};