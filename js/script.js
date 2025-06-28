fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
        // Store the data in a global variable
        window.data = data;
        // Call the function to display characters
        displayCharacters();
    })
    .catch((error) => console.error("Error fetching data:", error));

const charactersContainer = document.getElementById("characters-container");

function displayCharacters() {
    // Clear the container before displaying characters
    charactersContainer.innerHTML = "";
    // Check if data is available
    if (!window.data || !window.data.results) {
        console.error("No characters data available");
        return;
    }
    // Loop through the characters and create cards
    const data = window.data;
    if (!data || !data.results) {
        console.error("No characters data found");
        return;
    }
    if (data.results.length === 0) {
        console.warn("No characters to display");
        return;
    }
    // Create character cards
    data.results.forEach((character) => {
        const characterCard = document.createElement("div");
        characterCard.classList.add("card");
        charactersContainer.appendChild(characterCard);
        const card = document.createElement("div");
        card.classList.add("card-content");
        characterCard.appendChild(card);

        card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
        <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
        <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>
        `;
    });
}
