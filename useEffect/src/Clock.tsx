import { useState, useEffect } from "react";

export function Clock(): JSX.Element {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    // Creiamo un intervallo che aggiorna lo stato ogni 1000ms (1 secondo)
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // FUNZIONE DI CLEANUP (Pulizia)
    // È fondamentale rimuovere l'intervallo quando il componente viene smontato
    // per evitare sprechi di memoria o errori.
    return () => {
      clearInterval(timerId);
    };
  }, []); // [] vuoto significa: esegui solo una volta al montaggio del componente

  return (
    <div>
      <h2>Ora corrente: {date.toLocaleTimeString()}</h2>
    </div>
  );
}