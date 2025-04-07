import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ParkingForm() {
  const [vehicle, setVehicle] = useState([]);
  const [form, setForm] = useState({ licensePlate: "", carType: "Motorcycle" });
  const [goAwayForm, setGoAwayForm] = useState({ licensePlate: "", floor: "", spotID: "", carType: "Motorcycle" });
  
  // animation thingy
  const [showImage, setShowImage] = useState(false); // State for image visibility
  const [showOverlay, setShowOverlay] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch('/api/CarParking', { headers: { 'Cache-Control': 'no-cache' } });
    const data = await res.json();
    setVehicle(data.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGoAwayChange = (e) => {
    setGoAwayForm({ ...goAwayForm, [e.target.name]: e.target.value });
  };


  const handleAnimationComplete = async () => {
    setShowOverlay(true);
    
    try {
      const res = await fetch("/api/Alien", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "alienTriggered" }),
      });
      await res.json();
      
      // Wait a little to ensure the white screen is visible
      setTimeout(() => {
        throw new Error("Alien invasion caused system failure!");
      }, 1500);

      setTimeout(() => {
        router.refresh();
      }, 4000);
    } catch (error) {
      throw new Error("Alien invasion caused system failure!");
    }
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/CarParking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    await res.json();
    router.refresh();
    fetchItems();
  };

  const carGoSubmit = async () => {
    const res = await fetch("/api/CarParking", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goAwayForm),
    });
    await res.json();
    router.refresh();
    fetchItems();
  };

  const handleAlienClick = () => {
    const alienSound = new Audio("/alien2.mp3");
    alienSound.play();
  
    setShowImage(!showImage);
  };

  return (
    <div className="bg-[#0d1320] pd-60 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center text-4xl py-8">Car Parking Simulator</h1>
      
      <div className="flex flex-col w-full max-w-3xl">
        {/* Parking Form */}
        <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
          <h3 className="mr-2">Parking The Car: </h3>
          <input type="text" name="licensePlate" placeholder="License Plate" value={form.licensePlate} onChange={handleChange} className="border border-[#4a5053] px-2 py-1 rounded" />
          <select name="carType" id="carType" value={form.carType} onChange={handleChange} className="border border-[#4a5053] px-2 py-1 rounded">
            <option className="bg-gray-800" value="Motorcycle">Motorcycle</option>
            <option className="bg-gray-800" value="Car">Car</option>
            <option className="bg-gray-800" value="Bus">Bus</option>
          </select>
          <button onClick={handleSubmit} className="px-4 py-1 bg-[#0047b2] text-white rounded">Park</button>
        </div>

        {/* Remove Car Form */}
        <div className="flex flex-wrap gap-2 mb-8 items-center justify-center">
          <h3 className="mr-2">Go Away The Car:</h3>
          <input type="text" name="licensePlate" placeholder="License Plate" value={goAwayForm.licensePlate} onChange={handleGoAwayChange} className="border border-[#4a5053] px-2 py-1 rounded" />
          <input type="text" name="floor" placeholder="Level" value={goAwayForm.floor} onChange={handleGoAwayChange} className="border border-[#4a5053] px-2 py-1 rounded" />
          <input type="text" name="spotID" placeholder="Spot ID" value={goAwayForm.spotID} onChange={handleGoAwayChange} className="border border-[#4a5053] px-2 py-1 rounded" />
          <select name="carType" id="carType" value={goAwayForm.carType} onChange={handleGoAwayChange} className="border border-[#4a5053] px-2 py-1 rounded">
            <option className="bg-gray-800" value="Motorcycle">Motorcycle</option>
            <option className="bg-gray-800" value="Car">Car</option>
            <option className="bg-gray-800" value="Bus">Bus</option>
          </select>
          <button onClick={carGoSubmit} className="px-4 py-1 bg-[#b1030c] text-white rounded">Bye Bye Car</button>
        </div>

        {/* Alien Button */}
        <button onClick={handleAlienClick} className="px-4 py-1 bg-[#00a141] text-white rounded">Alien</button>

        {/* Image Display with onAnimationComplete */}
        <AnimatePresence>
          {showImage && (
            <motion.img 
              src="/smile_ichi.png" 
              alt="Alien" 
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain z-40"
              initial={{ scale: 0, rotate: 0 }}  
              animate={{ scale: 1.5, rotate: 360 }} 
              transition={{ duration: 1 }}
              onAnimationComplete={handleAnimationComplete} 
            />
          )}
        </AnimatePresence>
        
        {/* White overlay that fades in */}
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="fixed inset-0 z-50 bg-white" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Parking Table */}
      <div className="w-full max-w-4xl overflow-x-auto mt-8">
        <table className="border-collapse border border-[#4a5053] w-full">
          <thead>
            <tr>
              <th className="border border-[#4a5053] px-4 py-2">Level</th>
              <th className="border border-[#4a5053] px-4 py-2">Row</th>
              <th className="border border-[#4a5053] px-4 py-2">Spot</th>
              <th className="border border-[#4a5053] px-4 py-2">Size</th>
              <th className="border border-[#4a5053] px-4 py-2">License Plate</th>
              <th className="border border-[#4a5053] px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {vehicle.map((floorData, floorIndex) =>
              floorData.map((spot, spotIndex) => (
                <tr key={`${floorIndex}-${spotIndex}`} className="border border-[#4a5053]">
                  <td className="border border-[#4a5053] px-4 py-2">{spot.floor}</td>
                  <td className="border border-[#4a5053] px-4 py-2">{spot.row}</td>
                  <td className="border border-[#4a5053] px-4 py-2">{spot.spotID}</td>
                  <td className="border border-[#4a5053] px-4 py-2">{spot.spotSize}</td>
                  <td className="border border-[#4a5053] px-4 py-2">{spot.licensePlate}</td>
                  <td className="border border-[#4a5053] px-4 py-2">{spot.carType}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
