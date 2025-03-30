const ParkingSpot = require("./ParkingSpot");
const { SPOTS_PER_ROW } = require("./Vehicle");
const VehicleSize = require("./VehicleSize");

class Level {
    constructor(flr, numberSpots) {
        this.floor = flr;
        this.spots = [];
        this.availableSpots = 0;

        let largeSpots = numberSpots / 4;
        let bikeSpots = numberSpots / 4;
        let compactSpots = numberSpots - largeSpots - bikeSpots
    
        for (let i = 0; i < numberSpots; i++) {
            let sz = VehicleSize.Motorcycle;
            if (i < largeSpots) {
                sz = VehicleSize.Large;
            }

            else if (i < largeSpots + compactSpots) {
                sz = VehicleSize.Compact;
            }
            let row = i / SPOTS_PER_ROW;
            this.spots.push(ParkingSpot(this, row, i, sz));
        }
        this.availableSpots = numberSpots;
    }

    availableSpots() {
        return this.availableSpots;
    }

    parkVehicle(vehicle) {
        if (availableSpots() < this.vehicle.getSpotsNeeded()) {
            return false;
        }

        let spotNumber = findAvailableSpots(vehicle);
        if (spotNumber < 0) {
            return false;
        }
        return parkStartingAtSpot(spotNumber, vehicle);
    }
}

module.exports = Level;
