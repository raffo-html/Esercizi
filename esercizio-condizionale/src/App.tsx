import { Welcome } from "./Welcome";

function App(): JSX.Element {
  return (
    <div>
      <Welcome name="John" age={25} />
    </div>
  );
}

export default App;