import Link from "next/link";

export default function ReturnHome() {
  return (
    <div className="bg-neutral-900 p-2 py-1 rounded border border-neutral-700 lg:text-2xl w-fit mb-4 hover:text-green-400 duration-150">
      <Link href="/">&larr; Home</Link>
    </div>
  );
}
