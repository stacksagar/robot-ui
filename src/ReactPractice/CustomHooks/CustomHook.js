import { useState } from "react";

export default function CustomHook(getValue = 0) {
  const [count, setCount] = useState(getValue);
  const increment = (val) => setCount((prev) => prev + val);
  const decrement = (val) => setCount((prev) => prev - val);
  return [count, increment, decrement];
}
