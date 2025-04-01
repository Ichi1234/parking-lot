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

    
}

module.exports = Level;
