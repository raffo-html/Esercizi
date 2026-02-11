import { useState, ChangeEvent } from "react";

export function TodoList(): JSX.Element {
  // Stato per l'array di stringhe (i todo)
  const [items, setItems] = useState<string[]>([]);
  // Stato per gestire l'input controllato
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = (): void => {
    if (inputValue.trim() !== "") {
      // Aggiungiamo il nuovo elemento e svuotiamo l'input
      setItems((prevItems) => [...prevItems, inputValue]);
      setInputValue("");
    }
  };

  const handleReset = (): void => {
    // Svuota l'intero array
    setItems([]);
  };

  const handleRemoveTodo = (indexToRemove: number): void => {
    // Filtriamo l'array rimuovendo l'elemento alla posizione specificata
    setItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Todo List</h2>
      
      <div style={{ marginBottom: "10px" }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Cosa devi fare?"
        />
        <button onClick={handleAddTodo}>Aggiungi</button>
        <button onClick={handleReset}>Reset Lista</button>
      </div>

      <ul>
        {items.map((todo, index) => (
          <li key={index}>
            {todo}
            <button 
              onClick={() => handleRemoveTodo(index)} 
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}