import React from "react";

function Footer() {
  return (
    <section className="flex flex-col justify-center items-center  bg-black mt-10">
      <div className="absolute mb-48 z-50 flex justify-center items-center gap-9 bg-red-500 h-28 w-9/12 rounded rounded-tl-3xl rounded-br-3xl">
        <div className="text-white font-semibold text-xl">
          <p>Subscribe To Our Newsletter & Stay Updated</p>
        </div>
        <div className="flex justify-center items-center bg-white rounded-3xl">
          <input type="text" placeholder="Your Email" className="rounded-3xl p-2 w-80"/>
          <button type="button"className="bg-black text-white p-2.5 z-50 rounded-3xl w-44 ">Subscribe</button>
        </div>
      </div>
      <dir className="relative bottom-0 flex justify-end items-center  h-40 bg-black w-full">
        <nav className="bg-black pr-10">
          <div className="flex flex-wrap justify-between items-end ">
            <a href="#" className="flex">
              <img
                src="src\assets\images\laser-technologies-logo-1.svg"
                class="mr-3 h-6 sm:h-9"
                alt="Laser Technologies"
              />
            </a>
          </div>
        </nav>
      </dir>
    </section>
  );
}

export default Footer;
