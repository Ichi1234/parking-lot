// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [items, setItems] = useState([]);
//   const [form, setForm] = useState({ name: '', description: '' });

  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // const fetchItems = async () => {
  //   const res = await fetch('/api/items');
  //   const data = await res.json();
  //   setItems(data.data);
  // };

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

      // <ul>
      //   {items.map((item) => (
      //     <li key={item._id}>
      //       {item.name} - {item.description}
      //     </li>
      //   ))}
      // </ul>
//     </div>
//   );
// }

import { useState, useEffect } from "react";

export default function ParkingForm() {
  const [vehicle, setVehicle] = useState([]);
  const [form, setForm] = useState({ licensePlate: "", type: "Motorcycle" });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch('/api/CarParking');
    const data = await res.json();
    setVehicle(data.data);
  };


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/CarParking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("Response:", data);
  };

  return (
    <div>

      <ul>
        {vehicle.map((vehicle) => (
          <li key={vehicle._id}>
            Floor: {vehicle.floor}, Spot: {vehicle.spotID}, 
            License Plate: {vehicle.licensePlate}, Type: {vehicle.carType}
          </li>
        ))}
      </ul>
      
      <h1>Car Parking Simulator</h1>
      <div className="flex">
        <h3>Parking The Car: </h3>
        <input
          type="text"
          name="licensePlate"
          placeholder="License Plate"
          value={form.licensePlate}
          onChange={handleChange}
        />

        <select name="type" id="type" value={form.type} onChange={handleChange}>
          <option value="Motorcycle">Motorcycle</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
        </select>

        <button onClick={handleSubmit}>Park</button>
      </div>
            <div className="flex">
              <h3>Go Away The Car:</h3>

              <input type="text" placeholder="License Plate"></input>
              <select name="type" id="type">
                <option value="Motorcycle">Motorcycle</option>
                <option value="Car">Car</option>
                <option value="Bus">Bus</option>
              </select>

              <form>
                <input type="button" value="Bye Bye Car"></input>
              </form>


            </div>
        </div>
    );
}
