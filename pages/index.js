// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [items, setItems] = useState([]);
//   const [form, setForm] = useState({ name: '', description: '' });

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     const res = await fetch('/api/items');
//     const data = await res.json();
//     setItems(data.data);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await fetch('/api/items', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       });
//       fetchItems();
//       setForm({ name: '', description: '' });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Items</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Item name"
//           value={form.name}
//           onChange={handleChange}
//         />
//         <input
//           name="description"
//           placeholder="Item description"
//           value={form.description}
//           onChange={handleChange}
//         />
//         <button type="submit">Add Item</button>
//       </form>

//       <ul>
//         {items.map((item) => (
//           <li key={item._id}>
//             {item.name} - {item.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



import { useEffect, useState } from "react";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/car_parking")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div>
            <h1>Car Parking Simulator</h1>

            <div className="flex">

              <h3>Park The Car:</h3>
              <input type="text" placeholder="License Plate"></input>

              <select name="type" id="type">
                <option value="motorcycle">Motorcycle</option>
                <option value="car">Car</option>
                <option value="bus">Bus</option>
              </select>

              <form>
                <input type="button" value="Park"></input>
              </form>

            </div>

            <div className="flex">
              <h3>Go Away The Car:</h3>

              <input type="text" placeholder="License Plate"></input>
              <select name="type" id="type">
                <option value="motorcycle">Motorcycle</option>
                <option value="car">Car</option>
                <option value="bus">Bus</option>
              </select>

              <form>
                <input type="button" value="Bye Bye Car"></input>
              </form>


            </div>
        </div>
    );
}
