const Vehicle = require("./Vehicle");

class Bus extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, 5, VehicleSize.Large);
    }

    canFitInSpot(spot) {
        return spot.getSize() === VehicleSize.Large;
    }

    print() {
        console.log('B');
    }
}