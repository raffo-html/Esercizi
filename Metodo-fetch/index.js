async function fetchLotrCard() {
    const cardCode = "01001"; // Codice per la carta di Aragorn
    const apiUrl = `https://ringsdb.com/api/public/card/${cardCode}`;
    const baseUrl = "https://ringsdb.com";

    try {
        const response = await fetch(apiUrl);
        const card = await response.json();

        // 1. Inserimento del nome del personaggio
        const nameElement = document.getElementById('char-name');
        nameElement.textContent = card.name;

        // 2. Creazione e inserimento dell'immagine
        const imageContainer = document.getElementById('card-image-container');
        const img = document.createElement('img');
        
        // L'API restituisce un percorso relativo in imagesrc (es. /bundles/cards/01001.png)
        img.src = baseUrl + card.imagesrc;
        img.alt = card.name;

        imageContainer.appendChild(img);

    } catch (error) {
        console.error("Errore nel recupero della carta:", error);
        document.getElementById('char-name').textContent = "Errore nel caricamento";
    }
}

fetchLotrCard();