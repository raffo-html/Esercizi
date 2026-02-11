import { useState, useEffect, useRef } from "react";

export function Counter({ initialValue = 0 }): JSX.Element {
  const [counter, setCounter] = useState<number>(initialValue);
  const lastLoggedDirection = useRef<string>("");

  useEffect(() => {
    let currentDirection = "";

    if (counter > initialValue) {
      currentDirection = "up";
    } else if (counter < initialValue) {
      currentDirection = "down";
    }

    if (currentDirection !== "" && currentDirection !== lastLoggedDirection.current) {
      console.log("Direzione cambiata in:", currentDirection);
      lastLoggedDirection.current = currentDirection;
    }
  }, [counter, initialValue]);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(c => c + 1)}>+</button>
      <button onClick={() => setCounter(c => c - 1)}>-</button>
    </div>
  );
}