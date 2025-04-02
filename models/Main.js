const ParkingLot = require("./ParkingLot");
const Bus = require("./Bus");
const Car = require("./Car");
const Motorcycle = require("./Motorcycle");

class ParkingManager {
    constructor() {
        if (!ParkingManager.instance) {
            this.lot = new ParkingLot();
            this.eachCarType = {"car": Car, "bus": Bus, "motorcycle": Motorcycle}
            ParkingManager.instance = this
            // this.test();
        }
        return ParkingManager.instance;
    }

    addParkingSpot(licensePlate, carType) {
        this.lot.parkVehicle(new this.eachCarType[carType](licensePlate));
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
