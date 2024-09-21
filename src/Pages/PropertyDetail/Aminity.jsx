import React, { useState } from "react";
import {
  FaHome,
  FaFire,
  FaSink,
  FaPlug,
  FaDoorOpen,
  FaBell,
  FaTv,
  FaWind,
  FaTshirt,
  FaTree,
  FaGem,
  FaSwimmer,
  FaWifi,
} from "react-icons/fa";
import { MdOutlineFireplace } from "react-icons/md";

const amenities = [
  { icon: <FaHome className="w-6 h-6 mb-1" />, text: "2 Stories" },
  { icon: <FaFire className="w-6 h-6 mb-1" />, text: "Central Heating" },
  { icon: <FaSink className="w-6 h-6 mb-1" />, text: "Dual Sinks" },
  { icon: <FaPlug className="w-6 h-6 mb-1" />, text: "Electric Range" },
  { icon: <FaDoorOpen className="w-6 h-6 mb-1" />, text: "Emergency Exit" },
  { icon: <FaBell className="w-6 h-6 mb-1" />, text: "Fire Alarm" },
  { icon: <MdOutlineFireplace className="w-6 h-6 mb-1" />, text: "Fire Place" },
  { icon: <FaTv className="w-6 h-6 mb-1" />, text: "Home Theater" },
  { icon: <FaWind className="w-6 h-6 mb-1" />, text: "Hurricane Shutters" },
  { icon: <FaTshirt className="w-6 h-6 mb-1" />, text: "Laundry Room" },
  { icon: <FaTree className="w-6 h-6 mb-1" />, text: "Lawn" },
  { icon: <FaGem className="w-6 h-6 mb-1" />, text: "Marble Floors" },
  { icon: <FaSwimmer className="w-6 h-6 mb-1" />, text: "Swimming Pool" },
  { icon: <FaWifi className="w-6 h-6 mb-1" />, text: "Wifi" },
];

const Amenities = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleAmenities = showAll ? amenities : amenities.slice(0, 9);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border relative">
      <h2 className="text-lg font-semibold text-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
        Society Amenities
      </h2>
      <div className="grid grid-cols-3 gap-5 mt-8">
        {visibleAmenities.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center">
            {amenity.icon}
            <span>{amenity.text}</span>
          </div>
        ))}
      </div>
      <div className="mt-6  flex justify-center items-center">
        <button
          className=" text-indigo-600 hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "View all"}
        </button>
      </div>
    </div>
  );
};

export default Amenities;
