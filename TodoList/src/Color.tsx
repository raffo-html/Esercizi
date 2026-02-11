interface ColorProps {
  color: {
    id: number;
    name: string;
  };
}

export function Color({ color }: ColorProps): JSX.Element {
  return <li>{color.name}</li>;
}