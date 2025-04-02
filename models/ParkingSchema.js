import mongoose from 'mongoose';

const ParkingSchema = new mongoose.Schema({

  floor: {
    type: Number,
    required: true,
  },

  spotID: {
    type: Number,
    required: true,
  },

  licensePlate: {
    type: String,
    required: true,
  },

  carType: {
    type: String,
    required: true,
  },

 
});

export default mongoose.models.Parking  || mongoose.model('Parking', ParkingSchema);