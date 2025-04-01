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

// pages/api/items.js
import dbConnect from '../../lib/mongodb';
import Item from '../../models/Item';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const items = await Item.find({});
        res.status(200).json({ success: true, data: items });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const item = await Item.create(req.body);
        res.status(201).json({ success: true, data: item });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}


