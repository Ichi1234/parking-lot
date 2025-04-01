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

    getSize() {
        return this.spotSize;
    }

    getVehicle() {
        return this.vehicle
    }

    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }

    print() {
        console.log("Level: " + this.level.floor + " Row: " + this.row + " spotNumber: " + this.spotNumber + " SpotSize: " + this.spotSize + " Current Vehicle: " +  (this.vehicle ? this.vehicle.print() : "None"));
    }
}

module.exports = ParkingSpot;
