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

    
}

module.exports = ParkingSpot;
