interface AgeProps {
  age?: number;
}

function Age({ age }: AgeProps): JSX.Element {
  return <p>Your age is {age}</p>;
}

export default Age;