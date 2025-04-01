const ParkingSpot = require("./ParkingSpot");
const VehicleSize = require("./VehicleSize");

class Level {
    constructor(flr, numberSpots) {
        this.floor = flr;
        this.spots = [];
        this.availableSpots = 0;

        let SPOTS_PER_ROW = 10;
        let largeSpots = numberSpots / 4;
        let bikeSpots = numberSpots / 8;
        let compactSpots = numberSpots - largeSpots - bikeSpots
    
        for (let i = 0; i < numberSpots; i++) {
            let sz = VehicleSize.Motorcycle;
            if (i < largeSpots) {
                sz = VehicleSize.Large;
            }

            else if (i < largeSpots + compactSpots) {
                sz = VehicleSize.Compact;
            }

            let row = Math.floor(i / SPOTS_PER_ROW);
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
        console.log("Find the available spot: " + spotNumber)
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
        
        // console.log(`Finding spots for a ${vehicle.constructor.name} needing ${spotsNeeded} spots...`);
        
        
        for (let i = 0; i < this.spots.length; i++) {
            let spot = this.spots[i];
            // console.log(`Checking spot ${i}: Row ${spot.getRow()}, Size ${spot.getSize()}, Available: ${spot.isAvailable()}`);
            // if (!(spot instanceof ParkingSpot)) {
            //     console.error(`Error: spot at index ${i} is not a ParkingSpot!`, spot);
            // }
            
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
                console.log(`Found spot at index ${i - (spotsNeeded - 1)}`);
                return i - (spotsNeeded - 1);
            }
        }
        console.log("No available spots found!");
        return -1;
    }

    print() {
        let lastRow = -1;
        for (let i = 0; i < this.spots.length; i++) {
            let spot = this.spots[i];
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
