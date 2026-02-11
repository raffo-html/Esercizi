import Age from "./Age";

interface WelcomeProps {
  name?: string | JSX.Element;
  age?: number;
}

// Impostiamo "Guest" come valore predefinito per name
function Welcome({ name = "Guest", age }: WelcomeProps): JSX.Element {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <Age age={age} />
    </div>
  );
}

export default Welcome;