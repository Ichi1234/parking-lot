// models/Item.js
// models/Vehicle.js

class Vehicle {
  constructor(licensePlate, spotsNeeded, size) {
      this.parkingSpots = [];
      this.licensePlate = licensePlate;
      this.spotsNeeded = spotsNeeded;
      this.size = size;
  }

  // Getters
  getSpotsNeeded() {
      return this.spotsNeeded;
  }

  getSize() {
      return this.size;
  }

  // Park vehicle in this spot
  parkInSpot(spot) {
      this.parkingSpots.push(spot);
  }

  // Remove car from spot, and notify spot that it's gone
  clearSpots() {
      this.parkingSpots.forEach(spot => spot.removeVehicle());
      this.parkingSpots = [];
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