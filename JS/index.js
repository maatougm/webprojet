

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".est-carousel-slide");
const prevButton = document.querySelector(".est-carousel-prev");
const nextButton = document.querySelector(".est-carousel-next");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance the carousel (optional)
let slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Event listeners for navigation buttons
nextButton.addEventListener("click", () => {
    nextSlide();
    clearInterval(slideInterval); // Reset the interval on manual click
    slideInterval = setInterval(nextSlide, 5000);
});

prevButton.addEventListener("click", () => {
    prevSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
});

// Initialize the first slide
showSlide(currentSlide);

// API URL for fetching the standings (replace with the actual API URL)
const standingsApiUrl = "https://api-football-v1.p.rapidapi.com/v3/standings?season=2024&league=202"; // Example for Tunisian League
const rapidApiKey = "514c170d82msh994b970f47069f2p19da14jsn0fab3fa70192"; // Replace with your actual RapidAPI key

// Function to fetch and display the standings
async function fetchStandings() {
    const tableBody = document.querySelector("#main-standings-table tbody");

    try {
        const response = await fetch(standingsApiUrl, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": rapidApiKey,
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
            }
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // Log the entire API response for debugging

        // Check if the response has the expected structure
        if (!data.response || data.response.length === 0 || !data.response[0].league || !data.response[0].league.standings) {
            throw new Error("Invalid API response structure");
        }

        const standings = data.response[0].league.standings[0];

        // Clear existing table rows
        tableBody.innerHTML = "";

        // Add new rows based on fetched data
        standings.forEach(team => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${team.rank}</td>
                <td>
                    <img src="${team.team.logo}" alt="${team.team.name} Logo" class="main-team-logo-small">
                    ${team.team.name}
                </td>
                <td>${team.all.played}</td>
                <td>${team.all.win}</td>
                <td>${team.all.draw}</td>
                <td>${team.all.lose}</td>
                <td>${team.all.goals.for}:${team.all.goals.against}</td>
                
                <td>${team.points}</td>
                
            `;
            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error("Error fetching standings:", error);

        // Display a more informative error message to the user
        tableBody.innerHTML = `
            <tr>
                <td colspan="10">
                    Error loading standings. <br>
                    Details: ${error.message} <br>
                    Please check the following:
                    <ul>
                        <li>Your RapidAPI Key is correct and active.</li>
                        <li>You have sufficient API credits/quota.</li>
                        <li>Your network connection is working.</li>
                        <li>The API endpoint URL is correct.</li>
                    </ul>
                </td>
            </tr>`;
    }
}
// Call the function to fetch and display standings on page load
fetchStandings();


// Club presidents data
const presidentsData = [
    {
        name: "Mohamed Zouaoui",
        tenure: "1919-1931",
        imageUrl: "president1.jpg"
    },
    {
        name: "Chedly Zouiten",
        tenure: "1931-1963",
        imageUrl: "president2.jpg"
    },
    {
        name: "Mohamed Ben Smail",
        tenure: "1963-1968",
        imageUrl: "president3.jpg"
    },
    {
        name: "Ali Zouaoui",
        tenure: "1968-1971",
        imageUrl: "president4.jpg"
    },
    {
        name: "Hassen Belkhodja",
        tenure: "1971-1980",
        imageUrl: "president5.jpg"
    },
    {
        name: "Abdelhamid Achour",
        tenure: "1980-1984",
        imageUrl: "president6.jpg"
    },
    {
        name: "Ridha Meddeb",
        tenure: "1984-1985",
        imageUrl: "president7.jpg"
    },
    {
        name: "Hedi Jilani",
        tenure: "1985-1987",
        imageUrl: "president8.jpg"
    },
    {
        name: "Slim Chiboub",
        tenure: "1987-1989",
        imageUrl: "president9.jpg"
    },
    
    {
        name: "Slim Chiboub",
        tenure: "1989-2004",
        imageUrl: "president11.jpg"
    },
    
    {
        name: "Aziz Zouhir",
        tenure: "2004-2007",
        imageUrl: "president13.jpg"
    },
    {
        name: "Hamdi Meddeb",
        tenure: "2007-Present",
        imageUrl: "/prisident/l.jfif"
    }
];

// Function to add presidents to the list
function addPresidentsToList(presidents) {
    const presidentsList = document.querySelector(".main-presidents-list");
    presidents.forEach(president => {
        const presidentDiv = document.createElement("div");
        presidentDiv.classList.add("main-president");

        const img = document.createElement("img");
        img.src = president.imageUrl;
        img.alt = president.name;
        img.classList.add("main-president-image");
        presidentDiv.appendChild(img);

        const name = document.createElement("p");
        name.classList.add("main-president-name");
        name.textContent = president.name;
        presidentDiv.appendChild(name);

        const tenure = document.createElement("p");
        tenure.classList.add("main-president-tenure");
        tenure.textContent = president.tenure;
        presidentDiv.appendChild(tenure);

        presidentsList.appendChild(presidentDiv);
    });
}

// Call the function to add presidents
addPresidentsToList(presidentsData);
