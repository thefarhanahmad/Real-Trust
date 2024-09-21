import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Overview from "./Overview/Overview";
import Properties from "./Properties/Properties";
import Requests from "./Requests/Requests";
import Settings from "./Settings/Settings";
import Notifications from "./Notifications/Notifications";
import AddProperty from "../Owner/Properties/AddProperty/AddProperty";
import { FaBars } from "react-icons/fa"; // Import hamburger icon

const OwnerProfile = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    propertiesOwned: 0,
    propertiesManaged: 0,
    pendingRequests: 0,
    profileImage: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open by default for desktop
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);

    // Fetch user data from localStorage or an API
    const fullName = localStorage.getItem("fullName") || "John Doe";
    const email = localStorage.getItem("email") || "example@example.com";
    const phoneNumber = localStorage.getItem("phoneNumber") || "123-456-7890";
    const profileImage =
      localStorage.getItem("profileImage") || "https://via.placeholder.com/150";

    setProfileData({
      fullName,
      email,
      phoneNumber,
      propertiesOwned: 15, // Simulated data
      propertiesManaged: 30, // Simulated data
      pendingRequests: 7, // Simulated data
      profileImage,
    });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (isMobile) setIsSidebarOpen(false); // Hide sidebar on mobile when a section is clicked
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  };

  const handleAddPropertyClick = () => {
    setActiveSection("add-property"); // Set the active section to 'add-property'
  };

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <Overview profileData={profileData} />;
      case "properties":
        return (
          <Properties
            properties={profileData.propertiesOwned}
            onAddPropertyClick={handleAddPropertyClick}
          />
        );
      case "requests":
        return <Requests requestHistory={profileData.pendingRequests} />;
      case "settings":
        return <Settings profileData={profileData} />;
      case "notifications":
        return <Notifications notifications={profileData.notifications} />;
      case "add-property":
        return <AddProperty />;
      default:
        return <Overview profileData={profileData} />;
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row bg-gray-200 mt-20`}>
      {isMobile && (
        <div className="lg:hidden flex justify-between p-6 bg-white">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FaBars className="text-2xl text-yellow-700" />
          </button>
        </div>
      )}

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        activeSection={activeSection}
        onNavClick={handleSectionChange}
        onLogout={handleLogout}
        profileData={profileData}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onAddPropertyClick={handleAddPropertyClick}
      />

      <div
        className={`flex-1 lg:p-20 p-6 lg:mt-0 -mt-14 transition-all duration-300 ${
          isMobile && isSidebarOpen ? "hidden" : "block"
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default OwnerProfile;
