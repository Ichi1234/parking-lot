export default function handler(req, res) {
    if (req.method === "GET") {
        const products = [
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Mouse", price: 50 },
            { id: 3, name: "Keyboard", price: 100 }
        ];
        res.status(200).json(products);
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  