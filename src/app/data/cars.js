const cars = [
  "Quantum",
  "Millennium",
  "Kaiju",
  "Fang",
  "Glamour",
  "Centaur",
  "Thor",
  "Memphis",
  "Rodeo",
  "Kobra",
  "Conqueror",
  "Merlin",
  "Ace",
  "Apex",
  "Mantis",
  "Project",
  "Expedition",
  "Jackpot",
  "Startup",
  "Duster",
  "Protos",
  "Spectre",
  "Samurai",
  "Bandit",
  "Predator",
  "Time Machine",
  "Mamba",
  "Ronin",
  "Maverick",
  "Fury",
  "Bison",
  "Hornet",
  "Cyber",
  "Ghost",
  "Comet",
  "Leap",
  "Fortress",
  "Hammer",
  "Koi",
  "Firearrow",
  "Nightown",
  "Flower",
  "Wild West",
  "Electron",
  "Monster Car",
  "Coupe",
  "Horizon",
  "Wingman",
  "Chinese van",
  "Satin",
  "Hopper",
  "Tofu",
  "Tow Truck",
  "Timber",
  "Minni",
  "Neon",
  "Polluter",
  "The Krystal Ship",
  "Safari",
  "Agent",
  "Atomic",
  "Roamer",
  "Taxi",
].map((name) => ({
  name,
  img: `/images/${name.toLowerCase().replace(/\s+/g, "_")}.webp`,
}));

export default cars;
