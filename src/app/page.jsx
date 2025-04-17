import CarRankSelector from "./components/CarRankSelector";
import cars from "./data/cars";

export default function Home() {
  return (
    <div className="p-6 lg:p-24">
      <div className="lg:text-3xl">
        Select your cars then copy the generated text at the bottom of the page
        and paste it into the{" "}
        <span className="text-green-400 bg-neutral-800 p-2 py-1 rounded border border-neutral-700">
          /loadcardata
        </span>{" "}
        discord bot command
      </div>

      <div className="text-xl pt-4 pb-2 lg:font-bold lg:text-4xl lg:pb-8">
        Select the ranks of the cars below:
      </div>

      <CarRankSelector cars={cars} />
    </div>
  );
}
