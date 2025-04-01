const Vehicle = require("./Vehicle");
const VehicleSize = require("./VehicleSize");

class ParkingSpot {
    constructor(lvl, r, n, sz) {
        this.level = lvl;
        this.row = r;
        this.spotNumber = n;
        this.spotSize = sz;
        this.vehicle = null;
    }

    print() {
        console.log("Level: " + this.level.floor + " Row: " + this.row + " SpotSize: " + this.spotSize + " Current Vehicle: " + this.vehicle);
    }
}

module.exports = ParkingSpot;
