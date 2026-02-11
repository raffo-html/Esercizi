import { useState, useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";

interface CounterProps {
  initialValue?: number;
  incrementAmount?: number;
}

export function Counter({ 
  initialValue = 0, 
  incrementAmount = 1 
}: CounterProps): JSX.Element {
  const [counter, setCounter] = useState<number>(initialValue);

  // Effetto collaterale: stampa il valore in console ogni volta che 'counter' cambia
  useEffect(() => {
    console.log(`Il valore corrente del contatore è: ${counter}`);
  }, [counter]); // La dipendenza [counter] dice a React di eseguire l'effetto solo quando il contatore cambia

  const handleIncrement = () => setCounter((prev) => prev + incrementAmount);
  const handleDecrement = () => setCounter((prev) => prev - incrementAmount);
  const handleReset = () => setCounter(initialValue);

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>+{incrementAmount}</button>
      <button onClick={handleDecrement}>-{incrementAmount}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}