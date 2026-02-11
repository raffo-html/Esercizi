import { Age } from "./Age";
import { Message } from "./Message";

interface WelcomeProps {
  name: string;
  age: number;
}

export function Welcome({ name, age }: WelcomeProps): JSX.Element {
  return (
    <div>
      <p>Welcome, {name}!</p>

      {/* 1. Solo se age > 18 */}
      {age > 18 && <Age age={age} />}

      {/* 2. Solo se age è presente */}
      {age && <Age age={age} />}

      {/* 3. Solo se age è tra 18 e 65 */}
      {age > 18 && age < 65 && <Age age={age} />}

      {/* 4. Solo se age > 18 e name è John */}
      {age > 18 && name === "John" && <Age age={age} />}

      <Message age={age} />
    </div>
  );
}