"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
