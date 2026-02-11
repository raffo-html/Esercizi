import { Counter } from "./Counter";

function App(): JSX.Element {
  return (
    <div>
      <h1>Esempio Contatore</h1>
      {/* Passiamo il valore iniziale e la quantità di incremento/decremento */}
      <Counter initialValue={10} incrementAmount={5} />
    </div>
  );
}

export default App;