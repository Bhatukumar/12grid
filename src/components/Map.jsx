import React from "react";
import "./custom.css";
import AddressBox from "./AddressBox";

function Map() {
  return (
    <div className="relative pt-9 pb-9 flex items-center justify-start">
        <div className="flex justify-center items-centerh-52 w-80 absolute z-50 bg-black left-44 opacity-70 rounded-tl-3xl rounded-br-3xl">
            <div className="pl-9 pr-9 p-5 opacity-100  text-white">
                <h1 className="font-bold text-2xl ">Headquaters Office</h1>
                <h2 className="font-bold text-base pt-3">Laser Technologies Pvt Ltd</h2>
                <p className="text-sm pt-2">PAP/R/406 Rabale MIDC Near Dol Electric Company Rabale MIDC, Navi Mumbai - 400701.</p>
                <p className="text-sm">Landline - 022 4131 0099</p>
                <a href="http://" className="text-sm pt-3">Google map Link</a>
            </div>
        </div>
      <div className="map-container relative w-full h-96 md:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1844443454897!2d73.00443887466675!3d19.14340194985413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfeb4288ae8d%3A0x8b330290504e58fa!2sLaser%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718390449461!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="z-0 w-full h-full border-0"
        ></iframe>
        <AddressBox className="z-50 absolute top-0 left-0 p-4 bg-white bg-opacity-75 rounded-md shadow-lg" />
      </div>
    </div>
  );
}

export default Map;
