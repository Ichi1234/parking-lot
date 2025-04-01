const Level = require("./Level");

class ParkingLot {
    constructor() {
        this.NUM_LEVELS = 3;
        this.NUM_SPOT_EACH_LEVEL = 5;

        this.levels = [];
        for (let i = 0; i < this.NUM_LEVELS; i++) {
            this.levels.push(new Level(i, this.NUM_SPOT_EACH_LEVEL));
        }
    }

    print() {
        for (let l = 0; l < this.levels.length; l++) {
            console.log("Level: " + l + "\n");
            console.log(this.levels[l].print());
        }
    }

}

module.exports = ParkingLot;
