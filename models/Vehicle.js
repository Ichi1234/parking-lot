const VehicleSize = require("./VehicleSize");
const ParkingSpot = require("./ParkingSpot");

class Level {
    static SPOTS_PER_ROW = 10;

    constructor(floor, numberSpots) {
        this.floor = floor;
        this.spots = [];
        this.availableSpots = numberSpots;
        
        let largeSpots = Math.floor(numberSpots / 4);
        let bikeSpots = Math.floor(numberSpots / 4);
        let compactSpots = numberSpots - largeSpots - bikeSpots;

        for (let i = 0; i < numberSpots; i++) {
            let sz = VehicleSize.Motorcycle;
            if (i < largeSpots) {
                sz = VehicleSize.Large;
            } else if (i < largeSpots + compactSpots) {
                sz = VehicleSize.Compact;
            }
            let row = Math.floor(i / Level.SPOTS_PER_ROW);
            this.spots.push(new ParkingSpot(this, row, i, sz));
        }
    }

    availableSpots() {
        return this.availableSpots;
    }

    parkVehicle(vehicle) {
        if (this.availableSpots < vehicle.spotsNeeded) {
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
        this.availableSpots -= vehicle.spotsNeeded;
        return success;
    }

    findAvailableSpots(vehicle) {
        let spotsNeeded = vehicle.spotsNeeded;
        let lastRow = -1;
        let spotsFound = 0;
        for (let i = 0; i < this.spots.length; i++) {
            let spot = this.spots[i];
            if (lastRow !== spot.getRow()) {
                spotsFound = 0;
                lastRow = spot.getRow();
            }
            if (spot.canFitVehicle(vehicle)) {
                spotsFound++;
            } else {
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
        for (let spot of this.spots) {
            if (spot.getRow() !== lastRow) {
                process.stdout.write("  ");
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