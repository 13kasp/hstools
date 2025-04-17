"use client";

import { useState } from "react";

export default function GeneratedTextDisplay({ generatedText }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    });
  };

  return (
    <div>
      <div
        className="text-xl font-bold mb-1 lg:mb-4 cursor-pointer lg:text-4xl"
        onClick={handleCopy}
      >
        Generated Data{" "}
        <span className="font-normal text-neutral-300">
          ({copied ? "copied!" : "click to copy"})
        </span>
      </div>
      <div
        className="bg-neutral-900 text-green-400 p-3 rounded font-mono break-all border border-neutral-700 cursor-pointer lg:text-xl"
        onClick={handleCopy}
      >
        {generatedText}
      </div>
    </div>
  );
}
