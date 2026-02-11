import { useEffect, useRef } from "react";

export function MountMessage(): JSX.Element {
  const isMountedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      console.log("Componente montato per la prima volta!");
      isMountedRef.current = true;
    }
  }, []);

  return <p>Guarda la console del browser per il messaggio di benvenuto.</p>;
}