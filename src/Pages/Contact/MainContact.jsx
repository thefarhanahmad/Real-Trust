import React from "react";
import Contact from "./Contact";
import FindYourHome from "../Property/FindYourHome/FindYourHome";
import img1 from "../../assets/Images/Home-img/slider3.jpeg";
import WhatsAppButton from "./WpContact";

const MainContact = () => {
  return (
    <div className="">
      <div>
        <img src={img1} alt="" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6 mt-2 ">
        <div>
          <Contact />
        </div>
        <div className="mr-6">
          <FindYourHome />
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default MainContact;
