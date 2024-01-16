import React, { useState } from "react";

export default function Chauffage({ value, onChange, preventUserClick }) {
  const handleClick = (value) => {
    onChange(value);
    preventUserClick();
  };
  return (
    <div className="min-h-screen text-center flex flex-col items-center justify-center sm:gap-10">
      <h1 className="mt-20 text-3xl font-bold tracking-tight text-dkbrown sm:text-4xl mb-10">
        Quel est type de votre chauffage principal?
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10">
        <div
          className={`flex-shrink-0 w-1/3 max-w-xs overflow-hidden rounded-lg shadow-lg ${
            value === "eléctricité" ? "border-4 border-chocolate" : ""
          }`}
          onClick={() => handleClick("eléctricité")}
        >
          <button className="block focus:border-black transition duration-300 text-center text-gray-700">
            <img
              className="object-cover w-full h-1/2  mb-2"
              src="electric.jpg"
              alt="eléctricité"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
                Eléctricité
              </h4>
            </div>
          </button>
        </div>
        <div
          className={`flex-shrink-0 w-1/3 max-w-xs overflow-hidden rounded-lg shadow-lg ${
            value === "gaz" ? "border-4 border-chocolate" : ""
          }`}
          onClick={() => handleClick("gaz")}
        >
          <button className="block focus:border-black transition duration-300 text-center text-gray-700">
            <img
              className="object-cover w-full h-1/2 mb-2"
              src="gas.png"
              alt="gaz"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
                Gaz
              </h4>
            </div>
          </button>
        </div>
        <div
          className={`flex-shrink-0 w-1/3 max-w-xs overflow-hidden rounded-lg shadow-lg ${
            value === "bois" ? "border-4 border-chocolate" : ""
          }`}
          onClick={() => handleClick("bois")}
        >
          <button className="block focus:border-black transition duration-300 text-center text-gray-700">
            <img
              className="object-cover w-full h-1/2 mb-2"
              src="bois.jpg"
              alt="bois"
            />
            <div className="px-6 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
                Bois
              </h4>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
