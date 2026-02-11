import React from "react";

export function MouseClicker(): JSX.Element {
  // Gestore per il pulsante
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Usiamo currentTarget invece di target per assicurarci di leggere il nome del pulsante
    // anche se clicchiamo sull'immagine all'interno.
    console.log("Button name:", event.currentTarget.name);
  };

  // Gestore per l'immagine
  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    // Impediamo che l'evento risalga al pulsante (Stop Propagation)
    event.stopPropagation();
    console.log("Image src:", event.currentTarget.src);
  };

  return (
    <button name="one" onClick={handleButtonClick}>
      <img 
        src="https://via.placeholder.com/50" 
        alt="icon" 
        onClick={handleImageClick}
        width={50}
      />
      Cliccami!
    </button>
  );
}