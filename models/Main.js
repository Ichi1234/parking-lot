const ParkingLot = require("./ParkingLot");
const Bus = require("./Bus");
const Car = require("./Car");
const Motorcycle = require("./Motorcycle");
const Level = require("./Level");

class Main {
    constructor() {
        this.lot = new ParkingLot();
        this.test();
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

new Main();
