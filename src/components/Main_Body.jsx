// import React from "react";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function MainBody() {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [remark, setRemark] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [email, setEmail] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleOnChange = (value) => {
    setIsCaptchaVerified(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactChange = (event) => {
    setContactNumber(event.target.value);
  };
  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
  };
  const handleOrganisationChange = (event) => {
    setOrganisationName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setIsPopupOpen(true);
    setTimeout(() => {
      setName("");
      setContactNumber("");
      setEmail("");
      setOrganisationName("");
      setRemark("");
      // ... reset other state variables
      setIsPopupOpen(false);
    }, 5000);
  };

  function Popup({ message, isOpen, onClose }) {
    return (
      <div
        className={` absolute  top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 ${
          !isOpen && "hidden"
        }`}
      >
        <div className="bg-white rounded p-4 text-center">{message}</div>
      </div>
    );
  }

  return (
    <section>
      {isPopupOpen && (
        <Popup
          message="Form submitted successfully!"
          onClose={() => setIsPopupOpen(false)}
        />
      )}
      <div className="flex flex-col items-center justify-start max-w-full pb-9">
        <div className="self-stretch flex flex-row items-start justify-end">
          <div className="relative font-medium p-5">Home / Contact</div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-8/12 pt-10">
          <div className="w-full md:w-1/2 pt-10">
            <div className="bg-black h-56 w-full md:w-96 flex flex-col items-start justify-center p-9 max-w-full text-white rounded-tl-3xl rounded-br-3xl">
              <h1 className="text-4xl font-bold pb-3">Get in touch</h1>
              <h3 className="pt-2">
                Need our expertise for choosing your next laser machine?
              </h3>
            </div>
          </div>
          <div className="p-3 w-full md:w-1/2">
            <div>Fill out the form to get a free consultation.</div>
            <div className="w-full pt-7 flex flex-col items-start justify-start gap-5 text-base text-silver">
              <div className="w-full flex flex-col md:flex-row items-start justify-start gap-5">
                <div className="w-full md:flex-1 flex flex-col items-start justify-start gap-5">
                  <input
                    className="w-full border-none rounded-lg outline-none bg-gray-100 h-14 shadow-sm rounded-lg px-5 py-3 box-border font-medium text-base text-silver"
                    placeholder="Your Name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <input
                    className="w-full border-none rounded-lg outline-none bg-gray-100 h-14 shadow-sm rounded-lg px-5 py-3 box-border font-medium text-base text-silver"
                    placeholder="Contact Number"
                    type="text"
                    value={contactNumber}
                    onChange={handleContactChange}
                  />
                  <textarea
                    className="w-full rounded-lg px-5 py-3 border-none h-36 outline-none bg-gray-100 shadow-sm rounded-lg box-border font-medium text-base text-silver"
                    placeholder="Remark"
                    value={remark}
                    onChange={handleRemarkChange}
                  />
                </div>
                <div className="w-full md:flex-1 flex flex-col items-start justify-start gap-5">
                  <input
                    className="w-full border-none rounded-lg outline-none bg-gray-100 h-14 shadow-sm rounded-lg px-5 py-3 box-border font-medium text-base text-silver"
                    placeholder="Organisation Name"
                    type="text"
                    value={organisationName}
                    onChange={handleOrganisationChange}
                  />
                  <input
                    className="w-full border-none rounded-lg outline-none bg-gray-100 h-14 shadow-sm rounded-lg px-5 py-3 box-border font-medium text-base text-silver"
                    placeholder="Email ID"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <ReCAPTCHA
                  className="w-1/2"
                    sitekey="6LdYf_kpAAAAAJoOUOCgappHLreGo6RWxkjuIy3K" // Replace with your actual Site Key
                    onChange={handleOnChange}
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full md:w-1/2 border-none p-0 bg-black rounded-xl h-12 flex items-center justify-center"
                  >
                    <b className="text-sm font-semibold text-white">Submit</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBody;
