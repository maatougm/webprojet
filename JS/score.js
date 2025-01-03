// ... Previous JavaScript (for header, etc.) ...

// Scores Data (Replace with actual score data)
const scoresData = [
    // Football Scores
    
    {
        sport: "football",
        date: "2023-12-30",
        homeTeam: "Espérance Sportive de Tunis",
        awayTeam: "Club Africain",
        homeScore: 2,
        awayScore: 1,
        homeLogo: "/LOGOS/EST.png",
        awayLogo: "/LOGOS/ca.png"
    },
    // ... add more football scores
    // Handball Scores
    {
        sport: "handball",
        date: "2023-12-29",
        homeTeam: "Espérance Sportive de Tunis",
        awayTeam: "AS Téboulba",
        homeScore: 33,
        awayScore: 28,
        homeLogo: "est-logo.png",
        awayLogo: "as-teboulba-logo.png"
    },
    // ... add more handball scores
    // Volleyball Scores
    {
        sport: "volleyball",
        date: "2023-12-28",
        homeTeam: "Espérance Sportive de Tunis",
        awayTeam: "CO Kélibia",
        homeScore: 3,
        awayScore: 1,
        homeLogo: "est-logo.png",
        awayLogo: "co-kelibia-logo.png"
    },
    // ... add more volleyball scores
];

// Function to Create and Display Score Cards
function displayScores(scores) {
    const scoresList = document.getElementById("score-results-list");
    scoresList.innerHTML = ""; // Clear existing content

    scores.forEach(score => {
        const scoreCard = document.createElement("div");
        scoreCard.classList.add("score-card");

        const match = document.createElement("div");
        match.classList.add("score-match");

        const homeLogo = document.createElement("img");
        homeLogo.classList.add("score-team-logo");
        homeLogo.src = score.homeLogo;
        homeLogo.alt = `${score.homeTeam} Logo`;
        match.appendChild(homeLogo);

        const scoreText = document.createElement("div");
        scoreText.classList.add("score-match-score");
        scoreText.textContent = `${score.homeScore} - ${score.awayScore}`;
        match.appendChild(scoreText);

        const awayLogo = document.createElement("img");
        awayLogo.classList.add("score-team-logo");
        awayLogo.src = score.awayLogo;
        awayLogo.alt = `${score.awayTeam} Logo`;
        match.appendChild(awayLogo);

        scoreCard.appendChild(match);

        const matchInfo = document.createElement("div");
        matchInfo.classList.add("score-match-info");
        matchInfo.textContent = score.date;
        scoreCard.appendChild(matchInfo);

        scoresList.appendChild(scoreCard);
    });
}

// Filter Scores by Sport
function filterScores(sport) {
    const filteredScores = sport === "all"
        ? scoresData
        : scoresData.filter(score => score.sport === sport);

    displayScores(filteredScores);
}

// Event Listeners for Filter Buttons
const sportFilterButtons = document.querySelectorAll(".score-sport-filter .score-filter-button");

sportFilterButtons.forEach(button => {
    button.addEventListener("click", () => {
        sportFilterButtons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        const sport = button.dataset.sport;
        filterScores(sport);
    });
});

// Initial Display
displayScores(scoresData); // Show all scores initially
filterScores("all"); // Start with all sports selected