interface CounterDisplayProps {
  count: number;
}

export function CounterDisplay({ count }: CounterDisplayProps): JSX.Element {
  return <h2>{count}</h2>;
}