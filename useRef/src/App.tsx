import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";

function App(): JSX.Element {
  const handleLoginAction = (state: any) => {
    console.log("Dati ricevuti dal Login:", state);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Esercizio Form Controllati</h1>
      <InteractiveWelcome />
      <hr />
      <Login onLogin={handleLoginAction} />
    </div>
  );
}

export default App;