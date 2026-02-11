interface MessageProps {
  age: number;
}

export function Message({ age }: MessageProps): JSX.Element {
  return (
    <div>
      {age > 18 
        ? <p>Your age is {age}</p> 
        : <p>You are very young!</p>}
    </div>
  );
}