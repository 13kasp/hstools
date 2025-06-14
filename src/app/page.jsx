import { ArrowBigRightDash } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-4">
          <div className="text-6xl">HSTOOLS</div>

          <div className="text-3xl flex flex-col gap-2">
            <Link
              href="/carsetup"
              className="group relative inline-block text-white hover:text-green-400 transition-colors duration-150"
            >
              <ArrowBigRightDash className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-white group-hover:text-green-300" />
              <span className="inline-block transform transition-transform duration-150 group-hover:translate-x-6">
                Setup Cars
              </span>
            </Link>
            <Link
              href="/liveries"
              className="group relative inline-block text-white hover:text-green-400 transition-colors duration-150"
            >
              <ArrowBigRightDash className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-white group-hover:text-green-300" />
              <span className="inline-block transform transition-transform duration-150 group-hover:translate-x-6">
                Browse Liveries
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
