

class Vehicle {
    constructor(licensePlate, spotsNeeded, size) {
        this.parkingSpots = [];
        this.licensePlate = licensePlate;
        this.spotsNeeded = spotsNeeded;
        this.size = size;
    }
  
    getSpotsNeeded() {
        return this.spotsNeeded;
    }
  
    getSize() {
        return this.size;
    }
  
    // Abstract methods (to be implemented by subclasses)
    canFitInSpot(spot) {
        throw new Error("Method 'canFitInSpot()' must be implemented.");
    }
  
    print() {
        throw new Error("Method 'print()' must be implemented.");
    }
  }
  
  module.exports = Vehicle;