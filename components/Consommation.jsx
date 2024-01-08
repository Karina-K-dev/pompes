import React, { useState } from "react";

export default function Consommation({ value, onChange, preventUserClick }) {
  const handleInputChange = (slider) => {
    onChange(slider.target.value);
    preventUserClick();
    console.log("change");
  };
  return (
    <div>
      <div className="min-h-screen text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold tracking-tight text-dkbrown sm:text-4xl mb-10">
          Quelle est votre consommation en kWh chaque année??
        </h1>
        <div className="w-full h-full">
          <p className="text-3xl font-bold text-chocolate">
            {value}
            <span className="text-2xl text-dkbrown"> kwh/an</span>
          </p>
          <input
            className="sm:text-4xl"
            type="range"
            min="1000"
            max="30000"
            step="1"
            value={value}
            onChange={handleInputChange}
            style={{ background: "#f5eeed" }}
          />
          <div className="w-full select-none flex justify-between text-xs px-2"></div>
        </div>
      </div>
    </div>
  );
}
