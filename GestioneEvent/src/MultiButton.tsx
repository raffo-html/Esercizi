import React from "react";

export function MultiButton(): JSX.Element {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked:", event.currentTarget.name);
  };

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>Uno</button>
      <button name="two" onClick={handleButtonClick}>Due</button>
      <button name="three" onClick={handleButtonClick}>Tre</button>
    </div>
  );
}