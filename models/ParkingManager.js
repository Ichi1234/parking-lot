const ParkingLot = require("./ParkingLot");
const Bus = require("./Bus");
const Car = require("./Car");
const Motorcycle = require("./Motorcycle");

class ParkingManager {
    constructor() {
        if (!ParkingManager.instance) {
            this.lot = new ParkingLot();
            this.eachCarType = {"Car": Car, "Bus": Bus, "Motorcycle": Motorcycle}
            ParkingManager.instance = this
            // this.test();
        }
        return ParkingManager.instance;
    }

    displayTheSpot() {
        return this.lot.sentDataToFrontend();
    }

    addParkingSpot(licensePlate, carType) {
       console.log(carType); 
       return this.lot.parkVehicle(new this.eachCarType[carType](licensePlate));
    }

    insertSpotsFromData(spotData) {
        for (let spot of spotData) {
            // console.log(this.eachCarType[spot.carType]);
            this.lot.insertSpots(spot, new this.eachCarType[spot.carType](spot.licensePlate))
        }
    }

    carByeBye(spot) {

    }

    randomIntInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    

    test() {
        for (let licensePlate = 0; licensePlate < 10; licensePlate++) {
            this.lot.parkVehicle(new Bus(licensePlate));
            this.lot.parkVehicle(new Motorcycle(licensePlate));
            this.lot.parkVehicle(new Car(licensePlate));
        }
        this.lot.print();
    }
}

module.exports = new ParkingManager();
