import { useEffect, useRef } from "react";

export function FocusableInput(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Il focus viene attivato al montaggio del componente
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <label htmlFor="focusable">Focus automatico: </label>
      <input ref={inputRef} id="focusable" type="text" placeholder="Sono già a fuoco!" />
    </div>
  );
}