const ParkingLot = require("./ParkingLot");
const Bus = require("./Bus");
const Car = require("./Car");
const Motorcycle = require("./Motorcycle");

class Main {
    constructor() {
        this.lot = new ParkingLot();
        this.runSimulation();
    }

    randomIntInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    runSimulation() {
        for (let i = 0; i < 10; i++) {
            let v = new Bus(i);
            this.lot.parkVehicle(v)
        }
        this.lot.print();
        // while (true) {
        //     let parking = this.lot.parkVehicle(v)
        //     if (parking === false) {
        //         break;
        //     }
        //     this.lot.print();
        //     // let r = this.randomIntInRange(0, 10);
        //     // if (r < 2) {
        //     //     v = new Bus();
        //     // } else if (r < 4) {
        //     //     v = new Motorcycle();
        //     // } else {
        //     //     v = new Car();
        //     // }
        //     process.stdout.write("\nParking a ");
        //     v.print();
        //     console.log("");
        // }
        // console.log("Parking Failed. Final state:");
        // this.lot.print();
    }
}

new Main();
