const Vehicle = require("./Vehicle");

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