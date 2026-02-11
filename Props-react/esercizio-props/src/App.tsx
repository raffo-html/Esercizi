import Welcome from "./Welcome";

function App(): JSX.Element {
  return (
    <div>
      <Welcome name={<strong>Raffaele</strong>} age={25} />
    </div>
  );
}

export default App;