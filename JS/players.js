
// Players Data (Replace with actual player data and image URLs)
const playersData = [
    // Football Players
   
    {
        name: "Amanallah Memmiche",
        position: "goalkeeper",
        sport: "football",
        number: 16,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
     {
        name: "Bechir Ben Said",
        position: "goalkeeper",
        sport: "football",
        number: 28,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    {
        name: "Mohamed Sedki Debchi",
        position: "goalkeeper",
        sport: "football",
        number: 40,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
     {
        name: "Yassine Meriah",
        position: "defender",
        sport: "football",
        number: 4,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
      {
        name: "Mohamed Amine Tougai",
        position: "defender",
        sport: "football",
        number: 5,
        nationality: "Algeria",
        imageUrl: "player2.png"
    },
     {
        name: "Hamza Jelassi ",
        position: "defender",
        sport: "football",
        number: 6,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    {
        name: "aziz Kodhai ",
        position: "defender",
        sport: "football",
        number: 12,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    }, {
        name: "Koussay Smiri  ",
        position: "defender",
        sport: "football",
        number: 12,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    {
        name: "Mohamed Ben Ali ",
        position: "defender",
        sport: "football",
        number: 20,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    {
        name: "Raed Bouchniba",
        position: "defender",
        sport: "football",
        number: 20,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    
    {
        name: "Mohamed Amine Ben Hmida",
        position: "defender",
        sport: "football",
        number: 27,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
     {
        name: "Ayman Ben Mohamed ",
        position: "defender",
        sport: "football",
        number: 31,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    {
        name: "Oussema Bouguerra",
        position: "midfielder",
        sport: "football",
        number: 29,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    {
        name: "Yousri Hamzaoui",
        position: "midfielder",
        sport: "football",
        number: 32,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
     {
        name: "Mootez Zaddem",
        position: "midfielder",
        sport: "football",
        number: 8,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    {
        name: "Ghailene Chaalali",
        position: "midfielder",
        sport: "football",
        number: 15,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    {
        name: "Roger Aholou",
        position: "midfielder",
        sport: "football",
        number: 18,
        nationality: "Togo",
        imageUrl: "player2.png"
    },
     {
        name: "Zakaria El Ayeb",
        position: "midfielder",
        sport: "football",
        number: 22,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
      {
        name: "Wael Derbali",
        position: "midfielder",
        sport: "football",
        number: 23,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    {
        name: "Onuche Ogbelu",
        position: "midfielder",
        sport: "football",
        number: 24,
        nationality: "Nigeria",
        imageUrl: "player2.png"
    },
      {
        name: "Yan Sasse",
        position: "midfielder",
        sport: "football",
        number: 11,
        nationality: "Brazil",
        imageUrl: "player2.png"
    },
     {
        name: "Rodrigue Kossi",
        position: "midfielder",
        sport: "football",
        number: 30,
        nationality: "Benin",
        imageUrl: "player2.png"
    },
     {
        name: "Mohamed Wael Derbali",
        position: "forward",
        sport: "football",
        number: 23,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    {
        name: "Oussema Bouguerra",
        position: "forward",
        sport: "football",
        number: 29,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    {
        name: "Boutheina ben dhaou",
        position: "forward",
        sport: "football",
        number: 21,
        nationality: "Tunisia",
        imageUrl: "player2.png"
    },
    {
        name: "Keba Sowe",
        position: "forward",
        sport: "football",
        number: 9,
        nationality: "Gambia",
        imageUrl: "player2.png"
    },
    {
        name: "Rodrigo Rodrigues",
        position: "forward",
        sport: "football",
        number: 19,
        nationality: "Brazil",
        imageUrl: "player2.png"
    },
    // Handball Players
    {
        name: "Player Name",
        position: "Goalkeeper",
        sport: "handball",
        number: 1,
        nationality: "Tunisia",
        imageUrl: "player3.jpg"
    },
    {
        name: "Player Name",
        position: "Left Wing",
        sport: "handball",
        number: 2,
        nationality: "Algeria",
        imageUrl: "player4.jpg"
    },
    // ... add more handball players
    // Volleyball Players
    {
        name: "Player Name",
        position: "Setter",
        sport: "volleyball",
        number: 1,
        nationality: "Tunisia",
        imageUrl: "player5.jpg"
    },
    {
        name: "Player Name",
        position: "Outside Hitter",
        sport: "volleyball",
        number: 2,
        nationality: "Brazil",
        imageUrl: "player6.jpg"
    },
    // ... add more volleyball players
];

// Function to Create and Display Player Cards
function displayPlayers(players) {
    const playersList = document.getElementById("player-players-list");
    playersList.innerHTML = ""; // Clear existing content

    players.forEach(player => {
        const playerCard = document.createElement("div");
        playerCard.classList.add("player-player-card");

        const img = document.createElement("img");
        img.classList.add("player-player-image");
        img.src = player.imageUrl;
        img.alt = `${player.name} Profile Picture`;
        playerCard.appendChild(img);

        const name = document.createElement("h3");
        name.classList.add("player-player-name");
        name.textContent = player.name;
        playerCard.appendChild(name);

        const position = document.createElement("p");
        position.classList.add("player-player-position");
        position.textContent = player.position;
        playerCard.appendChild(position);

        const details = document.createElement("div");
        details.classList.add("player-player-details");
        details.innerHTML = `
            <p><strong>Number:</strong> ${player.number}</p>
            <p><strong>Nationality:</strong> ${player.nationality}</p>
        `;
        playerCard.appendChild(details);

        playersList.appendChild(playerCard);
    });
}

// Filter Players by Sport
function filterPlayers(sport) {
    const filteredPlayers = sport === "all"
        ? playersData
        : playersData.filter(player => player.sport === sport);

    displayPlayers(filteredPlayers);
}

// Event Listeners for Filter Buttons
const sportFilterButtons = document.querySelectorAll(".player-sport-filter .player-filter-button");

sportFilterButtons.forEach(button => {
    button.addEventListener("click", () => {
        sportFilterButtons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        const sport = button.dataset.sport;
        filterPlayers(sport);
    });
});

// Initial Display
displayPlayers(playersData); // Show all players initially
filterPlayers("all"); // Start with all sports selected