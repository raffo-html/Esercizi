import { useState } from "react";
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

  const handleIncrement = () => {
    /* Risposta: È meglio passare una funzione (prevCounter => prevCounter + incrementAmount).
       Perché: React gestisce gli aggiornamenti di stato in modo asincrono. Usando una funzione, 
       abbiamo la garanzia di lavorare sul valore di stato più recente ("prev"), evitando errori 
       se più aggiornamenti avvengono in rapida successione.
    */
    setCounter((prev) => prev + incrementAmount);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - incrementAmount);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Incrementa (+{incrementAmount})</button>
      <button onClick={handleDecrement}>Decrementa (-{incrementAmount})</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}