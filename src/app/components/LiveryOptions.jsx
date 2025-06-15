"use client";

import {
  ArrowDownNarrowWide,
  CarFront,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import React, { useState } from "react";
import carData from "@/app/data/cars";

export default function LiveryOptions({
  cars,
  selectedCars,
  setSelectedCars,
  sortBy,
  setSortBy,
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleCar = (car) => {
    setSelectedCars((prev) =>
      prev.includes(car) ? prev.filter((c) => c !== car) : [...prev, car]
    );
  };

  const selectAll = () => setSelectedCars(cars);
  const deselectAll = () => setSelectedCars([]);

  const sortedCars = [...cars].sort((a, b) => a.localeCompare(b));

  return (
    <div className="bg-neutral-900 w-full lg:min-w-80 lg:h-[100vh] border-y border-neutral-800">
      {/* Mobile Toggle Button */}
      <button
        className={`flex justify-between items-center px-4 py-3 ${
          isMobileOpen
            ? "border-b border-neutral-800"
            : "lg:border-b border-neutral-800"
        } w-full`}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <h2 className="text-xl lg:text-3xl lg:py-3 lg:text-center lg:w-full font-semibold">
          Livery Options
        </h2>
        <div className="lg:hidden text-gray-300 hover:text-white transition">
          {isMobileOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>

      <div
        className={`lg:block overflow-hidden transition-all duration-200 ease-in border-b border-neutral-800 ${
          isMobileOpen ? "max-h-[1000px]" : "max-h-0"
        } lg:max-h-none`}
      >
        <div className="p-6 pr-5">
          <div>
            <h3 className="text-2xl mb-4 flex items-center gap-2">
              <CarFront />
              Car
            </h3>
            <div className="mb-6 flex gap-2">
              <button
                onClick={selectAll}
                className="px-4 py-2 bg-green-400 rounded hover:bg-green-600 transition text-white"
              >
                Select All
              </button>
              <button
                onClick={deselectAll}
                className="px-4 py-2 bg-neutral-800 rounded hover:bg-neutral-700 transition text-white"
              >
                Deselect All
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:max-h-[40vh] max-h-[30vh] overflow-auto lg:pr-1">
              {sortedCars.map((car) => {
                const isSelected = selectedCars.includes(car);
                const carInfo = carData.find((c) => c.name === car);
                const carImg = carInfo?.img ?? "/images/default_car.webp";

                return (
                  <div
                    key={car}
                    onClick={() => toggleCar(car)}
                    className={`cursor-pointer rounded-md p-3 py-2 justify-center align-middle transition select-none bg-neutral-800 hover:bg-neutral-700 flex items-center gap-2
                      ${
                        isSelected
                          ? "border border-green-400 text-green-400"
                          : "border border-transparent text-gray-300"
                      }
                    `}
                    title={car}
                  >
                    <img
                      src={carImg}
                      alt={car}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="truncate">{car}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 w-full">
            <h3 className="text-2xl mb-4 flex gap-2 items-center">
              <ArrowDownNarrowWide />
              Sort By
            </h3>
            <select
              className="bg-neutral-800 text-white rounded p-2 py-4 w-full focus:outline-0"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="upvotes">Upvotes</option>
              <option value="car-asc">Car (A-Z)</option>
              <option value="car-desc">Car (Z-A)</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
            </select>
          </div>
        </div>
      </div>
      <div className="p-6">
        All liveries are automatically loaded from the{" "}
        <a
          href="https://discord.gg/UcYUBNtyMU"
          className="text-green-400 underline"
          target="_blank"
        >
          HotSlide Discord Server
        </a>
        . Please submit your liveries there!
      </div>
    </div>
  );
}
