// export default function handler(req, res) {
//     if (req.method === "GET") {
//         const products = [
//             { id: 1, name: "Laptop", price: 1200 },
//             { id: 2, name: "Mouse", price: 50 },
//             { id: 3, name: "Keyboard", price: 100 }
//         ];
//         res.status(200).json(products);
//     } else {
//         res.setHeader("Allow", ["GET"]);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   }

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

        ParkingManager.insertSpotsFromData(spotsData);
        ParkingManager.seeTheSpot();
        res.status(200).json({ success: true, data: spotsData });
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false });
      }
      break;
      
    case 'POST':
      try {
        const carData = {"licensePlate": req.body.licensePlate, "carType": req.body.type}
        console.log("Yes the data is here: " + carData.licensePlate + " " + carData.carType);
        
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


