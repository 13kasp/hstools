"use client";

import { ArrowBigUp, UserPen } from "lucide-react";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function LiveriesDisplay({ liveries, selectedCars, sortBy }) {
  const [hydrated, setHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <div className="text-gray-500 text-center mt-10">Loading...</div>;
  }

  const filtered = liveries
    .filter((livery) => selectedCars.includes(livery.car))
    .filter((livery) =>
      livery.livery_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "upvotes":
        return b.upvotes - a.upvotes;
      case "car-asc":
        return a.car.localeCompare(b.car);
      case "car-desc":
        return b.car.localeCompare(a.car);
      case "name-asc":
        return a.livery_name.localeCompare(b.livery_name);
      case "name-desc":
        return b.livery_name.localeCompare(a.livery_name);
      default:
        return 0;
    }
  });

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search liveries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 rounded-md bg-neutral-800 text-white placeholder-gray-400 border border-neutral-700 focus:outline-none transition"
        />
      </div>

      {sorted.length === 0 ? (
        <p className="text-gray-400 text-center">No liveries found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sorted.map((livery) => (
            <LiveryCard key={livery.id} livery={livery} />
          ))}
        </div>
      )}
    </div>
  );
}

function LiveryCard({ livery }) {
  const [loaded, setLoaded] = useState(false);

  function notifyCopy() {
    toast.success(
      "Copied Livery Successfully. Open the game and it should load automatically"
    );
  }

  return (
    <button
      className="bg-neutral-900 hover:bg-neutral-800 hover:cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-neutral-800 hover:border-neutral-700"
      onClick={() => {
        navigator.clipboard.writeText(livery.livery_link);
        notifyCopy();
      }}
    >
      <div className="w-full h-64 bg-neutral-700 relative">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <img
          src={livery.image}
          alt={livery.livery_name}
          className={`w-full h-64 object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="text-green-400 font-semibold flex gap-0.5 text-xl">
          <ArrowBigUp /> {livery.upvotes}
          <h3 className="font-semibold text-white truncate ml-2">
            {livery.livery_name}
          </h3>
        </div>
        <div className="flex text-lg gap-2">
          <p className="text-gray-300 truncate">{livery.car}</p>
          <p className="text-gray-500 flex gap-1">
            <UserPen /> {livery.poster_name}
          </p>
        </div>
        <div className="mt-3 text-left text-gray-500">
          Click to copy livery link
        </div>
        <Toaster
          toastOptions={{
            duration: 5000,
            style: {
              maxWidth: "500px",
              background: "#262626",
              color: "#f9fafb",
              fontSize: "1.25rem",
              boxShadow: "none",
            },
          }}
        />
      </div>
    </button>
  );
}
