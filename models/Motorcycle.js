const Vehicle = require("./Vehicle");
const VehicleSize = require("./VehicleSize");


class Motorcycle extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, VehicleSize.Motorcycle);
    }

    canFitInSpot(spot) {
        return true;
    }

    getVehicleName() {
       return 'Motorcycle';
    }
}

module.exports = Motorcycle;