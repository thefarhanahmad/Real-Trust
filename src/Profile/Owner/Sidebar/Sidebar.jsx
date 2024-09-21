// Sidebar.jsx
import React, { useState, useRef } from "react";
import {
  FaHome,
  FaBuilding,
  FaClipboardList,
  FaCog,
  FaBell,
  FaChevronUp,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({
  activeSection,
  onNavClick,
  onLogout,
  profileData,
  isSidebarOpen,
  onToggleSidebar,
  onAddPropertyClick,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleNavClick = (section) => {
    onNavClick(section);
    if (section === "properties") {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setIsDropdownOpen(false);
    }
  };

  const handleAddPropertyClick = () => {
    if (onAddPropertyClick) {
      onAddPropertyClick();
    }
    setIsDropdownOpen(false);
  };

  const menuItems = [
    { id: "overview", icon: <FaHome />, label: "Overview" },
    { id: "properties", icon: <FaBuilding />, label: "Properties" },
    { id: "requests", icon: <FaClipboardList />, label: "Requests" },
    { id: "settings", icon: <FaCog />, label: "Settings" },
    { id: "notifications", icon: <FaBell />, label: "Notifications" },
  ];

  return (
    <div
      className={`sticky top-0  left-0 z-30 p-4 pt-10  bg-black text-white transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:w-66 md:block md:sticky md:top-20`}
      style={{
        width: isSidebarOpen && window.innerWidth < 1024 ? "100%" : undefined,
        maxHeight: "calc(100vh - 4rem)", // Adjust based on your layout
        overflowY: "auto",
      }}
    >
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggleSidebar}
        className="absolute top-4 right-4 text-white md:hidden"
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar Container */}
      <div
        ref={sidebarRef}
        className={`flex flex-col h-full ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex items-center mb-6">
          {profileData?.profileImage ? (
            <img
              src={profileData.profileImage}
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
              <span className="text-slate-600 text-2xl font-bold">
                {profileData?.fullName?.[0]}
              </span>
            </div>
          )}
          <div className="pl-2">
            <h2 className="text-lg font-semibold">{profileData.fullName}</h2>
            <p>{profileData.email}</p>
          </div>
        </div>

        <nav className="flex-1 flex flex-col">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <React.Fragment key={item.id}>
                <li
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2 px-4 flex  items-center rounded-md cursor-pointer hover:bg-slate-800 ${
                    activeSection === item.id ? "bg-slate-800" : ""
                  }`}
                >
                  {item.icon}
                  <span className="ml-2 ">{item.label}</span>
                  {item.id === "properties" && (
                    <span className="ml-auto ">
                      {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  )}
                </li>
                {/* Dropdown menu */}
                {isDropdownOpen && item.id === "properties" && (
                  <ul className="mt-1 bg-slate-800 text-white rounded-md shadow-lg">
                    <li
                      onClick={handleAddPropertyClick}
                      className={`py-2 px-4 flex items-center text-sm rounded-md cursor-pointer hover:bg-slate-800 ${
                        activeSection === "add-property" ? "bg-slate-800" : ""
                      }`}
                    >
                      Add Property
                    </li>
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>

          <div className="mt-20">
            <button
              onClick={onLogout}
              className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
