"use client";

import LiveryOptions from "../components/LiveryOptions";
import React, { useState } from "react";
import LiveriesDisplay from "./LiveriesDisplay";

export default function LiveriesClientWrapper({ liveries }) {
  const uniqueCars = Array.from(new Set(liveries.map((l) => l.car)));

  const [selectedCars, setSelectedCars] = useState(uniqueCars);
  const [sortBy, setSortBy] = useState("upvotes");

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:min-w-80 lg:w-[19vw] lg:h-[100vh] ">
        <LiveryOptions
          cars={uniqueCars}
          selectedCars={selectedCars}
          setSelectedCars={setSelectedCars}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>{" "}
      <div className="lg:h-[100vh] lg:overflow-auto lg:w-[81vw]">
        <LiveriesDisplay
          liveries={liveries}
          selectedCars={selectedCars}
          sortBy={sortBy}
        />
      </div>
    </div>
  );
}
