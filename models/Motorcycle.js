const Vehicle = require("./Vehicle");
const VehicleSize = require("./VehicleSize");


class Motorcycle extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, 1, VehicleSize.Motorcycle);
    }

    canFitInSpot(spot) {
        return true;
    }

    print() {
        console.log('Morcycle');
    }
}

module.exports = Motorcycle;