import { Counter } from "./Counter";
import { Clock } from "./Clock";

function App(): JSX.Element {
  return (
    <div>
      <h1>Esercizi useEffect</h1>
      <Clock />
      <hr />
      <Counter initialValue={0} incrementAmount={1} />
    </div>
  );
}

export default App;