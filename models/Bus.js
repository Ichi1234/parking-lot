const Vehicle = require("./Vehicle");
const VehicleSize = require("./VehicleSize");

class Bus extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, 5, VehicleSize.Large);
    }

    canFitInSpot(spot) {
        return spot.getSize() === VehicleSize.Large;
    }

    print() {
        return 'Bus';
    }
}

module.exports = Bus;
