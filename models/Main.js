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
        this.lot.print();
    }
}

new Main();
