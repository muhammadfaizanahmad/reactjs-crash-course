"use client";

import { useMemo } from "react";

type Props = {
  numbers: number[];
};

export default function Calculation({ numbers }: Props) {
    
  const calculate = (nums: number[]): number => {
    return nums.reduce((total, num) => total + num, 0);
  };

  //   useMemo will only recomute the sum when the "numbers" changes

  const total = useMemo(() => calculate(numbers), [numbers]);
  return (
    <div>
      <h2>Sum of Numbers: {total}</h2>
    </div>
  );
}
