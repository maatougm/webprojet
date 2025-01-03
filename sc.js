// Honours Data (Replace with actual data and image URLs)
const honoursData = [
    // Football
    {
        category: "CAF Champions League",
        years: [2019, 2018, 2011, 1994],
        img: "placeholder_cafcl.jpg",
        type: "football",
        sport: "football"
    },
    {
        category: "Arab Club Champions Cup",
        years: [2017, 2009, 1993],
        img: "placeholder_arab.jpg",
        type: "football",
        sport: "football"
    },
    {
        category: "African Cup Winners' Cup",
        years: [1998],
        img: "placeholder_cupwinners.jpg",
        type: "football",
        sport: "football"
    },
    {
        category: "CAF Super Cup",
        years: [1995],
        img: "placeholder_cafsupercup.jpg",
        type: "football",
        sport: "football"
    },
    {
        category: "Afro-Asian Club Championship",
        years: [1995],
        img: "placeholder_afroasian.jpg",
        type: "football",
        sport: "football"
    },
    {
        category: "Tunisian Ligue Professionnelle 1",
        years: [2022, 2021, 2020, 2019, 2018, 2017, 2014, 2012, 2011, 2010, 2009, 2006, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1994, 1993, 1991, 1989, 1988, 1985, 1982, 1976, 1975, 1970, 1960, 1959, 1942],
        img: "placeholder_league.jpg",
        type: "football",
        sport: "football"
    },
    {
        category: "Tunisian Cup",
        years: [2016, 2011, 2008, 2007, 2006, 1999, 1997, 1991, 1989, 1986, 1980, 1979, 1964, 1957, 1939],
        img: "placeholder_cup.jpg",
        type: "football",
        sport: "football"
    },
    {
        category: "Tunisian Super Cup",
        years: [2020, 2019, 2001, 1993, 1960],
        img: "placeholder_supercup.jpg",
        type: "football",
        sport: "football"
    },
    // Handball
    {
        category: "Tunisian Handball League",
        years: [2023, 2021, 2019, 2017, 2016, 2014, 2013, 2012, 2010, 2009, 2005, 2004, 1999, 1998, 1997, 1995, 1993, 1992, 1991, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966],
        img: "placeholder_handball_league.jpg",
        type: "handball",
        sport: "handball"
    },
    {
        category: "Tunisian Handball Cup",
        years: [2022, 2021, 2020, 2018, 2013, 2006, 2005, 2002, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960, 1959],
        img: "placeholder_handball_cup.jpg",
        type: "handball",
        sport: "handball"
    },
    {
        category: "African Handball Champions League",
        years: [2013, 2005, 1998, 1994, 1993],
        img: "placeholder_handball_champions.jpg",
        type: "handball",
        sport: "handball"
    },
    {
        category: "African Handball Cup Winners' Cup",
        years: [2015, 2014, 2003],
        img: "placeholder_handball_cupwinners.jpg",
        type: "handball",
        sport: "handball"
    },
    {
        category: "African Handball Super Cup",
        years: [2016, 2014, 1995, 1994],
        img: "placeholder_handball_supercup.jpg",
        type: "handball",
        sport: "handball"
    },
    // Volleyball
    {
        category: "Tunisian Volleyball League",
        years: [2022, 2021, 2020, 2019, 2018, 2016, 2015, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1980, 1979, 1978, 1976, 1969, 1967, 1966, 1965, 1964],
        img: "placeholder_volleyball_league.jpg",
        type: "volleyball",
        sport: "volleyball"
    },
    {
        category: "Tunisian Volleyball Cup",
        years: [2023, 2021, 2020, 2019, 2018, 2017, 2014, 2010, 2009, 2007, 2006, 2002, 2000, 1999, 1998, 1997, 1996, 1994, 1993, 1992, 1991, 1988, 1980, 1979, 1977, 1976, 1975, 1974, 1973, 1972, 1971, 1970, 1967, 1966, 1965, 1964],
        img: "placeholder_volleyball_cup.jpg",
        type: "volleyball",
        sport: "volleyball"
    },
    {
        category: "African Volleyball Champions League",
        years: [2021, 2014, 2000, 1998, 1994],
        img: "placeholder_volleyball_champions.jpg",
        type: "volleyball",
        sport: "volleyball"
    },
     {
        category: "Arab Volleyball Clubs Championship",
        years: [2019, 2014, 2008, 1998, 1992, 1980],
        img: "placeholder_volleyball_arab.jpg",
        type: "volleyball",
        sport: "volleyball"
    }

    
];

// Get Elements
const honoursList = document.getElementById("honours-list");
const showAllButton = document.getElementById("show-all");
const startYearSelect = document.getElementById("start-year");
const endYearSelect = document.getElementById("end-year");
const filterYearButton = document.getElementById("filter-year-button");
const sportFilterButtons = document.querySelectorAll(".sport-filter .filter-button");

// Function to Create and Display Honours
function displayHonours(data) {
    honoursList.innerHTML = ""; // Clear existing content

    data.forEach(item => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("trophy-category");

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("trophy-img");
        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.category + " Trophy";
        imgDiv.appendChild(img);

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("trophy-details");
        const title = document.createElement("h3");
        title.textContent = item.category;
        detailsDiv.appendChild(title);

        const yearsList = document.createElement("ul");
        item.years.forEach(year => {
            const yearItem = document.createElement("li");
            yearItem.innerHTML = `<span>${year}</span>`;
            yearsList.appendChild(yearItem);
        });
        detailsDiv.appendChild(yearsList);

        categoryDiv.appendChild(imgDiv);
        categoryDiv.appendChild(detailsDiv);
        honoursList.appendChild(categoryDiv);
    });
}

// Populate Year Selects
function populateYearSelects() {
    let minYear = Infinity;
    let maxYear = -Infinity;

    honoursData.forEach(item => {
        item.years.forEach(year => {
            minYear = Math.min(minYear, year);
            maxYear = Math.max(maxYear, year);
        });
    });

    for (let year = maxYear; year >= minYear; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.text = year;
        startYearSelect.appendChild(option.cloneNode(true));
        endYearSelect.appendChild(option);
    }
}

// Filter by Year
function filterByYear() {
    const startYear = parseInt(startYearSelect.value);
    const endYear = parseInt(endYearSelect.value);

    const filteredData = honoursData.filter(item => {
        const hasMatchingYear = item.years.some(year => year >= startYear && year <= endYear);
        return hasMatchingYear;
    });

    displayHonours(filteredData);
}

// Filter by Sport
function filterBySport(sport) {
    const filteredData = honoursData.filter(item => {
        return sport === "all" || item.sport === sport;
    });

    displayHonours(filteredData);
}

// Event Listeners
showAllButton.addEventListener("click", () => {
    displayHonours(honoursData);
    sportFilterButtons.forEach(button => button.classList.remove("active"));
    showAllButton.classList.add("active");
});

filterYearButton.addEventListener("click", filterByYear);

sportFilterButtons.forEach(button => {
    button.addEventListener("click", () => {
        sportFilterButtons.forEach(b => b.classList.remove("active"));
        showAllButton.classList.remove("active");
        button.classList.add("active");
        const sport = button.dataset.sport;
        filterBySport(sport);
    });
});

// Initial Setup
populateYearSelects();
displayHonours(honoursData); // Show all initially
filterBySport("football");
// ... Previous JavaScript ...

document.addEventListener('DOMContentLoaded', function() {
    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const sponsorsSlider = document.querySelector('.sponsors-slider');
    if (sponsorsSlider) {
        let scrollAmount = 0;
        const scrollStep = 2; // Adjust for faster/slower scroll
        const scrollInterval = 20; // Adjust for smoother/jerkier scroll

        setInterval(() => {
            scrollAmount += scrollStep;
            if (scrollAmount >= sponsorsSlider.scrollWidth / 2) {
                scrollAmount = 0;
            }
            sponsorsSlider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, scrollInterval);
    }
});
// ... Previous JavaScript (for footer, honours, etc.) ...

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mainNav.classList.toggle("show");
});