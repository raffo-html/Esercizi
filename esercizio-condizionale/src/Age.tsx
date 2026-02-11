interface AgeProps {
  age?: number;
}

export function Age({ age }: AgeProps): JSX.Element {
  return <p>Your age is {age}</p>;
}