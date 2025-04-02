import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function ParkingForm() {
  const [vehicle, setVehicle] = useState([]);
  const [form, setForm] = useState({ licensePlate: "", carType: "Motorcycle" });
  const [goAwayForm, setGoAwayForm] = useState({ licensePlate: "", floor: "", spotID: "", carType: "Motorcycle" });

  const router = useRouter();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch('/api/CarParking', {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
    const data = await res.json();
    setVehicle(data.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGoAwayChange = (e) => {
    setGoAwayForm({ ...goAwayForm, [e.target.name]: e.target.value });
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
    router.refresh();
    fetchItems();
    
  };

  const carGoSubmit = async () => {
    const res = await fetch("/api/CarParking", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goAwayForm),
    });
    const data = await res.json();
    console.log("Response:", data);
    router.refresh();
    fetchItems();
  };

  return (
    <div>
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
        <select name="carType" id="carType" value={form.carType} onChange={handleChange}>
          <option value="Motorcycle">Motorcycle</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
        </select>
        <button onClick={handleSubmit}>Park</button>
      </div>

      <div className="flex">
        <h3>Go Away The Car:</h3>
        <input
          type="text"
          name="licensePlate"
          placeholder="License Plate"
          value={goAwayForm.licensePlate}
          onChange={handleGoAwayChange}
        />
         <input
          type="text"
          name="floor"
          placeholder="Level"
          value={goAwayForm.floor}
          onChange={handleGoAwayChange}
        />
        <input
          type="text"
          name="spotID"
          placeholder="Spot ID"
          value={goAwayForm.spotID}
          onChange={handleGoAwayChange}
        />
       
        <select name="carType" id="carType" value={goAwayForm.carType} onChange={handleGoAwayChange}>
          <option value="Motorcycle">Motorcycle</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
        </select>
        <button onClick={carGoSubmit}>Bye Bye Car</button>
      </div>

      <table className="border-collapse border border-gray-400 w-[80vh]">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Level</th>
            <th className="border border-gray-400 px-4 py-2">Row</th>
            <th className="border border-gray-400 px-4 py-2">Spot</th>
            <th className="border border-gray-400 px-4 py-2">Size</th>
            <th className="border border-gray-400 px-4 py-2">License Plate</th>
            <th className="border border-gray-400 px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {vehicle.map((floorData, floorIndex) =>
            floorData.map((spot, spotIndex) => (
              <tr key={`${floorIndex}-${spotIndex}`} className="border border-gray-400">
                <td className="border border-gray-400 px-4 py-2">{spot.floor}</td>
                <td className="border border-gray-400 px-4 py-2">{spot.row}</td>
                <td className="border border-gray-400 px-4 py-2">{spot.spotID}</td>
                <td className="border border-gray-400 px-4 py-2">{spot.spotSize}</td>
                <td className="border border-gray-400 px-4 py-2">{spot.licensePlate}</td>
                <td className="border border-gray-400 px-4 py-2">{spot.carType}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}