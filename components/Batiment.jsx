import React, { useState } from "react";

export default function Batiment({
  value,
  onChange,
  preventUserClick,
  isEnabled,
}) {
  const handleClick = (value) => {
    onChange(value);
    preventUserClick();
  };

  return (
    <div className="min-h-screen text-center flex flex-col items-center justify-center sm:gap-10">
      <h1 className="mt-20 text-3xl font-bold tracking-tight text-dkbrown sm:text-4xl mb-10">
        Quel type de bâtiment souhaitez vous équiper?
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10">
        <div
          className={`flex-shrink-0 w-1/3 max-w-xs overflow-hidden rounded-lg shadow-lg  ${
            value === "maison individuelle" ? "border-4 border-chocolate" : ""
          }`}
          onClick={() => handleClick("maison individuelle")}
        >
          <button className="block focus:border-black transition duration-300 text-center text-gray-700">
            <img
              className="object-cover w-full h-1/2 mb-2"
              src="maison.jpg"
              alt="maison"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-chocolate">
                Maison
              </h4>
            </div>
          </button>
        </div>
        <div
          className={`flex-shrink-0 w-1/3 max-w-xs overflow-hidden rounded-lg shadow-lg ${
            value === "immeuble" ? "border-4 border-chocolate" : ""
          }`}
          onClick={() => handleClick("immeuble")}
        >
          <button className="block focus:border-black transition duration-300 text-center text-gray-700">
            <img
              className="object-cover w-full h-1/2 mb-2"
              src="immeuble.jpg"
              alt="immeuble"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-chocolate">
                Immeuble
              </h4>
            </div>
          </button>
        </div>
        <div
          className={`flex-shrink-0 w-1/3 max-w-xs overflow-hidden rounded-lg shadow-lg ${
            value === "bureau" ? "border-4 border-chocolate" : ""
          }`}
          onClick={() => handleClick("bureau")}
        >
          <button className="block focus:border-black transition duration-300 text-center text-gray-700">
            <img
              className="object-cover w-full h-1/2 mb-2"
              src="office.jpg"
              alt="bureau"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-dkbrown">
                Bureau
              </h4>
            </div>
          </button>
        </div>
      </div>
      {!isEnabled ? (
        <p className=" mt-3 text-sm text-chocolate">
          Merci de sélectionner une option
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
