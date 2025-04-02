import dbConnect from '../../lib/mongodb';
import ParkingManager from '../../models/ParkingManager';
import Parking from '../../models/ParkingSchema';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const spotsData = await Parking.find({});
        // console.log(`This is data: ${spotsData}`);
        console.log(ParkingManager.displayTheSpot());
        ParkingManager.insertSpotsFromData(spotsData);
        res.status(200).json({ success: true, data: ParkingManager.displayTheSpot() });
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false });
      }
      break;
      
    case 'POST':
      try {
        const carData = {"licensePlate": req.body.licensePlate, "carType": req.body.type}
        // console.log("Yes the data is here: " + carData.licensePlate + " " + carData.carType);
        
        const dataForMongo = ParkingManager.addParkingSpot(carData.licensePlate, carData.carType);

        if (!dataForMongo) {
          res.status(400).json({ success: false, data: dataForMongo });
          break;
        }

        // console.log(`spotID: ${dataForMongo.spotID} floor: ${dataForMongo.floor} licensePlate: ${dataForMongo.licensePlate} carType: ${dataForMongo.carType}`)
        const items = await Parking.create(dataForMongo);

        // console.log(items)

        res.status(201).json({ success: true, data: items });
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


