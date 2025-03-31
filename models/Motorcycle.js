const Vehicle = require("./Vehicle");
const VehicleSize = require("./VehicleSize");


class Motorcycle extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, 5, VehicleSize.Motorcycle);
    }

    canFitInSpot(spot) {
        return true;
    }

    print() {
        console.log('M');
    }
}

module.exports = Motorcycle;