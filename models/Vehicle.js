

class Vehicle {
    constructor(licensePlate, size) {
        this.parkingSpots = [];
        this.licensePlate = licensePlate;
        this.size = size;

    }
  
    getSize() {
        return this.size;
    }
  
    // Abstract methods (to be implemented by subclasses)
    canFitInSpot(spot) {
        throw new Error("Method 'canFitInSpot()' must be implemented.");
    }
  
    getVehicleName() {
        throw new Error("Method 'print()' must be implemented.");
    }
}
  
module.exports = Vehicle;