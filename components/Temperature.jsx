import React, { useState } from "react";

export default function TemperatureSlider({
  value,
  onChange,
  preventUserClick,
}) {
  const handleTemperatureChange = (event) => {
    onChange(event.target.value);
    preventUserClick();
  };

  return (
    <div className="min-h-screen text-center flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold tracking-tight text-dkbrown sm:text-4xl mb-10">
        A quelle température chauffez vous en moyenne cette surface?
      </h1>
      <div className="flex justify-center items-center gap-10">
        <div className="w-full h-full">
          <p className="text-3xl font-bold text-chocolate">
            {value}
            <span className="text-sm text-dkbrown"> °C</span>
          </p>

          <input
            className="sm:text-4xl "
            type="range"
            min="10"
            max="30"
            step="1"
            value={value}
            onChange={handleTemperatureChange}
            style={{ background: "#f5eeed" }}
          />
        </div>
      </div>
    </div>
  );
}
