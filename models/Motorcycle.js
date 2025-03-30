const Vehicle = require("./Vehicle");

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