const Vehicle = require("./Vehicle");
const VehicleSize = require("./VehicleSize");

class Car extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, VehicleSize.Compact);
    }

    canFitInSpot(spot) {
        return spot.getSize() == VehicleSize.Compact || spot.getSize() == VehicleSize.Large;
    }

    getVehicleName() {
        return "Car";
    }
}

module.exports = Car;
