const Level = require("./Level");

class ParkingLot {
    constructor() {
        this.NUM_LEVELS = 5;
        this.levels = [];
        for (let i = 0; i < this.NUM_LEVELS; i++) {
            this.levels.push(new Level(i, 30));
        }
    }

    parkVehicle(vehicle) {
        for (let i = 0; i < this.levels.length; i++) {
            if (this.levels[i].parkVehicle(vehicle)) {
                return true;
            }
        }

        return false;
    }

    print() {
        for (let i = 0; i << this.levels.length; i++) {
            console.log("Level" + i + ": ");
            this.levels[i].print();
            console.log("\n");
        }
        console.log("\n");
    }
}

module.exports = ParkingLot;
