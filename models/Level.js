const ParkingSpot = require("./ParkingSpot");
const VehicleSize = require("./VehicleSize");

class Level {
    constructor(flr, numberSpots) {
        this.floor = flr;
        this.spots = [];
        this.availableSpots = numberSpots;

        let SPOTS_PER_ROW = 10;
        let largeSpots = numberSpots / 4;
            
        for (let i = 0; i < numberSpots; i++) {
            let spotSize = VehicleSize.Motorcycle;
            if (i < largeSpots) {
                spotSize = VehicleSize.Large;
            }

            else {
                spotSize = VehicleSize.Compact;
            }

            let row = Math.floor(i / SPOTS_PER_ROW);
            this.spots.push(new ParkingSpot(this, row, i, spotSize));
        }
    }

    isNotFull() {
        return this.availableSpots > 0;
    }

    parkVehicle(vehicle) {
        for (let s = 0; s < this.spots.length; s++) {
            if (vehicle.canFitInSpot(this.spots[s]) && this.spots[s].getVehicle() == null) {
                this.spots[s].setVehicle(vehicle);
                this.availableSpots--;
                return true
            }
        }
        return false;
    }

    print() {
        for (let s = 0; s < this.spots.length; s++) {
            this.spots[s].print();
        }
    }
}

module.exports = Level;
