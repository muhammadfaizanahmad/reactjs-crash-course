"use client";

import { useContext } from "react";
import { CounterContext } from "@context/counter-context";

export default function Counter() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
