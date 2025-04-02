const Vehicle = require("./Vehicle");
const VehicleSize = require("./VehicleSize");

class Bus extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, VehicleSize.Large);
    }

    canFitInSpot(spot) {
        return spot.getSize() === VehicleSize.Large;
    }

    getVehicleName() {
        return 'Bus';
    }
}

module.exports = Bus;
