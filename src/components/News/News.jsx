import React from "react";

export default function News() {
  return (
    <div className="grid grid-cols-1 my-9">
      <div
        className="bg-gray-300 block bg-center content-box bg-cover h-56 "
        style={{
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="flex flex-col h-full justify-center">
          <div class="text-center">
            <div class="text-black">
              <h4 className="text-2xl mb-3">Esenciales para Tu Look</h4>
              <button class="flex-shrink-0 text-black bg-gray-400 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 rounded text-lg sm:mt-0">
                Ver Novedades
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
