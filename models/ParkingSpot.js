const Vehicle = require("./Vehicle");

class parkingSpots {
    constructor(lvl, r, n, sz) {
        this.level = lvl;
        this.row = r;
        this.spotNumber = n;
        this.spotSize = sz;
        this.vehicle = Vehicle
    }

    isAvailable() {
        return this.vehicle == null;
    }

    canFitV
}