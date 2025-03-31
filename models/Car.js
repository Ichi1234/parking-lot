const Vehicle = require("./Vehicle");
const VehicleSize = require("./VehicleSize");

class Car extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, 1, VehicleSize.Compact);
    }

    canFitInSpot(spot) {
        return spot.getSize() == VehicleSize.Compact || spot.getSize() == VehicleSize.Large;
    }

    print() {
        console.log("C");
    }
}

module.exports = Car;
