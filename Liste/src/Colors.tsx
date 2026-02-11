import { Color } from "./Color";

interface ColorsProps {
  items: {
    id: number;
    name: string;
  }[];
}

export function Colors({ items }: ColorsProps): JSX.Element {
  return (
    <ul>
      {items.map((item) => (
        /* Usiamo l'id come chiave (key) per aiutare React a gestire i cambiamenti nel DOM */
        <Color key={item.id} color={item} />
      ))}
    </ul>
  );
}