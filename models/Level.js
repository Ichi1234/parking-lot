const ParkingSpot = require("./ParkingSpot");
const VehicleSize = require("./VehicleSize");

class Level {
    constructor(flr, numberSpots) {
        this.floor = flr;
        this.spots = [];
        this.availableSpots = 0;

        let SPOTS_PER_ROW = 10;
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
            this.spots.push(new ParkingSpot(this, row, i, sz));
        }
        this.availableSpots = numberSpots;
    }

    getAvailableSpots() {
        return this.availableSpots;
    }

    parkVehicle(vehicle) {
        if (this.getAvailableSpots() < vehicle.getSpotsNeeded()) {
            return false;
        }

        let spotNumber = this.findAvailableSpots(vehicle);
        if (spotNumber < 0) {
            return false;
        }
        return this.parkStartingAtSpot(spotNumber, vehicle);
    }

    parkStartingAtSpot(spotNumber, vehicle) {
        vehicle.clearSpots();
        let success = true;
        for (let i = spotNumber; i < spotNumber + vehicle.spotsNeeded; i++) {
            success &= this.spots[i].park(vehicle);
        }        
        this.availableSpots -= vehicle.spotsNeeded
        return success;
    }

    findAvailableSpots(vehicle) {
        let spotsNeeded = vehicle.getSpotsNeeded();
        let lastRow = -1;
        let spotsFound = 0;
        for (let i = 0; i < this.spots.length; i++) {
            let spot = this.spots[i]
            if (lastRow != spot.getRow()) {
                spotsFound = 0;
                lastRow = spot.getRow();
            }

            if (spot.canFitVehicle(vehicle)) {
                spotsFound++;
            }

            else {
                spotsFound = 0;
            }

            if (spotsFound === spotsNeeded) {
                return i - (spotsNeeded - 1);
            }
        }
        return -1;
    }

    print() {
        let lastRow = -1;
        for (let i = 0; i < this.spots.length; i++) {
            let spot = spots[i];
            if (spot.getRow() != lastRow) {
                console.log("  ");
                lastRow = spot.getRow();
            }
            spot.print();
        }
    }

    spotFreed() {
        this.availableSpots++;
    }
}

module.exports = Level;
