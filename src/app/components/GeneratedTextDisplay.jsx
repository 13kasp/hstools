"use client";

import { useEffect, useState } from "react";

export default function GeneratedTextDisplay({ generatedText, onTextChange }) {
  const [text, setText] = useState(generatedText);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    onTextChange(newText);
  };

  useEffect(() => {
    setText(generatedText);
  }, [generatedText]);

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
      <textarea
        className="bg-neutral-900 text-green-400 p-3 rounded font-mono break-all border border-neutral-700 cursor-text lg:text-xl w-full min-h-48 focus:outline-none"
        onChange={handleChange}
        onClick={handleCopy}
        value={text}
      />
    </div>
  );
}
