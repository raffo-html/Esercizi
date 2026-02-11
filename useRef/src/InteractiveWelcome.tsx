import { useState, ChangeEvent } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome(): JSX.Element {
  const [name, setName] = useState<string>("");

  // Funzione con parametro tipizzato e valore di default gestito dallo stato
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  return (
    <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <label htmlFor="name-input">Scrivi il tuo nome: </label>
      <input 
        id="name-input"
        type="text" 
        value={name} 
        onChange={handleChange} 
      />
      {/* Passiamo il nome digitato al componente Welcome */}
      <Welcome name={name} />
    </div>
  );
}