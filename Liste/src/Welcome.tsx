interface WelcomeProps {
  name?: string;
  age?: number;
}

// Definiamo il ritorno come JSX.Element
export function Welcome({ name = "Guest", age }: WelcomeProps): JSX.Element {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong>!</p>
      {age && <p>Your age is {age}</p>}
    </div>
  );
}