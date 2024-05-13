"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="bg-indigo-500 h-screen flex justify-center items-center">
      <button
        className="border border-white text-white rounded-md p-2"
        onClick={handleClick}
      >
        Clicked {count} times
      </button>
    </div>
  );
}
