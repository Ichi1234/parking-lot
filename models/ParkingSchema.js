import mongoose from 'mongoose';

const ParkingSchema = new mongoose.Schema({

  floor: {
    type: Int8Array,
    require: true,
  },

  spotID: {
    type: Int8Array,
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