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

    isAvailable() {
        return this.vehicle === null;
    }

    canFitVehicle(vehicle) {
        return this.isAvailable() && vehicle.canFitInSpot(this);
    }

    park(v) {
        if (!this.canFitVehicle(v)) {
            return false;
        }
        this.vehicle = v;
        this.vehicle.parkInSpot(this);
        return true;
    }

    getRow() {
        return this.row;
    }

    getSpotNumber() {
        return this.spotNumber;
    }

    getSize() {
        return this.spotSize;
    }

    removeVehicle() {
        this.level.spotFreed();
        this.vehicle = null;
    }

    print() {
        if (this.vehicle === null) {
            if (this.spotSize === VehicleSize.Compact) {
                console.log("c");
            }

            else if (this.spotSize === VehicleSize.Large) {
                console.log("l");
            }

            else if (this.spotSize === VehicleSize.Motorcycle) {
                console.log("m");
            }
        }

        else {
            this.vehicle.print();
        }
    }
}

module.exports = ParkingSpot;
