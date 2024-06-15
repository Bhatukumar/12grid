import React from "react";

function Main_two() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center p-9 m-9 min-h-80">
      <div className="flex flex-col items-center justify-start gap-12 w-full">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="h-40 w-full lg:w-1/4 flex flex-col lg:flex-row justify-center items-center rounded-xl transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl">
            <h1 className="text-9xl font-bold text-gray-200">M</h1>
            <div className="text-center lg:text-left">
              <h2 className="font-bold text-xl pb-2">Mumbai</h2>
              <div className="text-sm">
                PAP/R/406 Rabale MIDC Near Dol Electric Company Rabale MIDC, Navi Mumbai - 400701.
              </div>
            </div>
          </div>
          <div className="h-40 w-full lg:w-1/4 flex flex-col lg:flex-row justify-center items-center rounded-xl transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl">
            <h1 className="text-9xl font-bold text-gray-200">P</h1>
            <div className="text-center lg:text-left">
              <h2 className="font-bold text-xl pb-2">Pune</h2>
              <div className="text-sm">
                "S" Block, plot No.186, MIDC, Bhosari. Pune - 411026
              </div>
            </div>
          </div>
          <div className="h-40 w-full lg:w-1/4 flex flex-col lg:flex-row justify-center items-center rounded-xl transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl">
            <h1 className="text-9xl font-bold text-gray-200">G</h1>
            <div className="text-center lg:text-left">
              <h2 className="font-bold text-xl pb-2">Gujarat</h2>
              <div className="text-sm">
                A-5, GF, Barcelona Multiple Business Campus, Odhav Ring Road Circle, Ahmedabad, Gujarat - 382430
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="h-40 w-full lg:w-1/4 flex flex-col lg:flex-row justify-center items-center rounded-xl transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl">
            <h1 className="text-9xl font-bold text-gray-200">K</h1>
            <div className="text-center lg:text-left">
              <h2 className="font-bold text-xl pb-2">Karnataka</h2>
              <div className="text-sm">
                77/78/B, Janapriya Commercial Complex, Magadi Main Rd, Sunkadakatte, Bengaluru, Karnataka - 560091
              </div>
            </div>
          </div>
          <div className="h-40 w-full lg:w-1/4 flex flex-col lg:flex-row justify-center items-center rounded-xl transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl">
            <h1 className="text-9xl font-bold text-gray-200">D</h1>
            <div className="text-center lg:text-left">
              <h2 className="font-bold text-xl pb-2">Delhi</h2>
              <div className="text-sm">
                S-98 Second Floor Phase-2, Okhla Industrial Area, New Delhi - 110020
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main_two;
