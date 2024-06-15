import React from "react";

function Bottom() {
  return (
    <section className="flex flex-col items-center justify-center h-screen py-16 md:py-30">
      <div className="font-bold text-3xl text-center h-20 p-5 m-5 bottom-10">
        <h2>How can we help?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-9">
        <div className="flex justify-center p-5 items-center rounded-2xl transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl">
          <div className="flex flex-col justify-center items-center text-center">
            
            <img
              src="src/assets/images/demo-icon.svg"
              alt="Demo"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <div className="mt-4">
              
              <p className=" text-xl">Schedule a Demo</p>
              <p className="font-bold text-xl text-red-500">Demo</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-5 items-center rounded-2xl transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl">
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src="src/assets/images/quote-icon.svg"
              alt="quote"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <div className="mt-4">
              <p className=" text-xl">Request a Quote</p>
              <p className="font-bold text-xl text-red-500">Quote</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-5 items-center rounded-2xl transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl">
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src="src/assets/images/sample.svg"
              alt="Sample"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <div className="mt-4">
              <p className=" text-xl">Send us a Sample</p>
              <p className="font-bold text-xl text-red-500">Sample</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-5 items-center rounded-2xl transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl">
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src="src/assets/images/call-for-ticket-icon.svg"
              alt="Query"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <div className="mt-4">
              <p className=" text-xl">Raise your Query</p>
              <p className="font-bold text-xl text-red-500">Query</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bottom;
