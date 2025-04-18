"use client";

import { useState } from "react";
import GeneratedTextDisplay from "./GeneratedTextDisplay";

export default function CarRankSelector({ cars }) {
  const [carRanks, setCarRanks] = useState(
    Object.fromEntries(cars.map((car) => [car.name, "X"]))
  );

  const handleRankChange = (carName, rank) => {
    setCarRanks((prev) => ({
      ...prev,
      [carName]: rank === "Don't own" ? "X" : rank,
    }));
  };

  const handleTextChange = (newText) => {
    const newRanks = {};
    newText.split(",").forEach((entry) => {
      const [carName, rank] = entry.split("#");
      if (carName && rank) {
        const originalCarName = cars.find(
          (car) => car.name.toLowerCase().replace(/\s+/g, "_") === carName
        )?.name;
        if (originalCarName) {
          newRanks[originalCarName] = rank;
        }
      }
    });
    setCarRanks((prev) => ({ ...prev, ...newRanks }));
  };

  const generatedText = cars
    .map((car) => {
      const formattedName = car.name.toLowerCase().replace(/\s+/g, "_");
      return `${formattedName}#${carRanks[car.name]}`;
    })
    .join(",");

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:flex lg:flex-wrap lg:gap-4 lg:justify-start">
        {cars.map((car, index) => (
          <CarDisplay
            key={index}
            car={car.name}
            image={car.img}
            selected={carRanks[car.name]}
            onChange={(rank) => handleRankChange(car.name, rank)}
          />
        ))}
      </div>

      <div className="pt-6">
        <GeneratedTextDisplay
          generatedText={generatedText}
          onTextChange={handleTextChange}
        />
      </div>
    </div>
  );
}

function CarDisplay({ car, image, selected, onChange }) {
  return (
    <div className="w-full max-w-48 border border-neutral-700 overflow-hidden rounded">
      <div className="relative aspect-square overflow-hidden rounded rounded-b-none">
        <div
          className="absolute inset-0 bg-bottom bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute w-full bg-black/40 text-white text-lg font-bold p-1">
          {car}
        </div>
      </div>

      <select
        value={selected === "X" ? "Don't own" : selected}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black text-white text-sm p-2 rounded focus:outline-none hover:cursor-pointer"
      >
        <option>Don't own</option>
        <option>SSS</option>
        <option>SS</option>
        <option>S</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
  );
}
