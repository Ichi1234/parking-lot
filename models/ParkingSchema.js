import mongoose from 'mongoose';

const ParkingSchema = new mongoose.Schema({

  floor: {
    type: Number,
    require: true,
  },

  spotID: {
    type: Number,
    require: true,
  },

  licensePlate: {
    type: String,
    require: true,
  },

  carType: {
    type: String,
    require: true,
  },

 
});

export default mongoose.models.ParkingSchema || mongoose.model('Parking', ParkingSchema);