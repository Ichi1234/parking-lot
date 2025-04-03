import dbConnect from '../../lib/mongodb';
import ParkingManager from '../../models/ParkingManager';
import Parking from '../../models/ParkingSchema';

export default async function handler(req, res) {
    await dbConnect();
  
    const { method } = req;
  
    switch (method) {
      
      case 'DELETE':
        try {
         
          await Parking.deleteMany({});
          
          ParkingManager.clearAllData();

          res.status(201).json({ success: true });
        } catch (error) {
          console.log(error)
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
}