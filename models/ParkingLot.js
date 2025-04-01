const Level = require("./Level");

class ParkingLot {
    constructor() {
        this.NUM_LEVELS = 4;
        this.levels = [];
        for (let i = 0; i < this.NUM_LEVELS; i++) {
            this.levels.push(new Level(i, 30));
        }
    }

}

module.exports = ParkingLot;
