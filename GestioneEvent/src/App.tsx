import { MouseClicker } from "./MouseClicker";
import { MultiButton } from "./MultiButton";

function App(): JSX.Element {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Esercizio Eventi</h1>
      <section>
        <h3>Mouse Clicker</h3>
        <MouseClicker />
      </section>
      <hr />
      <section>
        <h3>Multi Button</h3>
        <MultiButton />
      </section>
    </div>
  );
}

export default App;