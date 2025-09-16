"use client";

import { useRef } from "react";

export default function Input() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  return (
    <div className="space-x-2">
      <input
        type="text"
        placeholder="Focus me!"
        className="p-2 border-2 rounded-lg border-gray-600"
        ref={inputRef}
      />
      <button
        className="p-2 rounded-lg bg-indigo-600 text-white"
        onClick={focusInput}
      >
        Focus Input
      </button>
    </div>
  );
}
