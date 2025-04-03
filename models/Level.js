const ParkingSpot = require("./ParkingSpot");
const VehicleSize = require("./VehicleSize");

class Level {
    constructor(flr, numberSpots) {
        this.floor = flr;
        this.spots = [];

        let SPOTS_PER_ROW = 10;
        let largeSpots = numberSpots / 4;
            
        for (let i = 0; i < numberSpots; i++) {
            let spotSize = VehicleSize.Motorcycle;
            if (i < largeSpots) {
                spotSize = VehicleSize.Large;
            }

            else {
                spotSize = VehicleSize.Compact;
            }

            let row = Math.floor(i / SPOTS_PER_ROW);
            this.spots.push(new ParkingSpot(this, row, i, spotSize));
        }
    }

    clearAllData() {
        for (let s = 0; s < this.spots.length; s++) {
            this.spots[s].clearAllData();
        }
    }
    parkVehicle(vehicle) {
        for (let s = 0; s < this.spots.length; s++) {
            if (vehicle.canFitInSpot(this.spots[s]) && this.spots[s].getVehicle() == null) {
                return this.spots[s].setVehicle(vehicle);

            }
        }
        return false;
    }

    insertSpots(spotID, vehicle) {
        this.spots[spotID].setVehicle(vehicle);
    }

    removeParkingVehicle(spotID) {
        this.spots[spotID].setVehicle(null);
    }

    print() {
        for (let s = 0; s < this.spots.length; s++) {
            this.spots[s].print();
        }
    }

    sentDataToFrontend() {
        let spotsData = [];
        for (let s = 0; s < this.spots.length; s++) {
            spotsData.push(this.spots[s].sentDataToFrontend());
        }

        return spotsData;
    }
}

module.exports = Level;
