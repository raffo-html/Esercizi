import { Colors } from "./Colors";

function App(): JSX.Element {
  const colorList = [
    { id: 1, name: "Red" },
    { id: 2, name: "Green" },
    { id: 3, name: "Blue" },
    { id: 4, name: "Yellow" },
  ];

  return (
    <div>
      <h1>Lista di Colori</h1>
      <Colors items={colorList} />
    </div>
  );
}

export default App;