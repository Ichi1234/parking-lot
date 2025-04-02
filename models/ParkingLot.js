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

    parkVehicle(vehicle) {
        for (let l = 0; l < this.levels.length; l++) {
            if (this.levels[l].isNotFull()) {
                let parked = this.levels[l].parkVehicle(vehicle);

                if (parked) {
                    return parked;
                }
                console.log("Level: " + l + " don't have the space for " + vehicle.getVehicleName())
            
                if (l == this.levels.length - 1) {
                    console.log("My parking spot doesn't have room for your car. Please disappear into the void.")
                }

                else {
                    console.log("Level: " + l + " is full. GO TO NEXT THE FLOOR REEEEEEEE");
                }
            }
        }

        return false;
    }

    insertSpots(spot, vehicle) {
        this.levels[spot.floor].insertSpots(spot.spotID, vehicle);
    }

    print() {
        for (let l = 0; l < this.levels.length; l++) {
            console.log("Level: " + l + "\n");
            console.log(this.levels[l].print());
        }
    }

}

module.exports = ParkingLot;
