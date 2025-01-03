// Honours Data (Replace with actual data and image URLs)
const honoursData = [
    {
          category: "CAF Champions League",
          years: [2019, 2018, 2011, 1994],
          img: "placeholder_cafcl.jpg",
          type: "international"
      },
       {
          category: "Arab Club Champions Cup",
          years: [2017, 2009, 1993],
          img: "placeholder_arab.jpg",
          type: "international"
      },
        {
          category: "African Cup Winners' Cup",
          years: [1998],
          img: "placeholder_cupwinners.jpg",
          type: "international"
      },
      {
          category: "CAF Super Cup",
          years: [1995],
          img: "placeholder_cafsupercup.jpg",
          type: "international"
      },
      {
          category: "Afro-Asian Club Championship",
          years: [1995],
          img: "placeholder_afroasian.jpg",
          type: "international"
      },
  
      {
          category: "Tunisian Ligue Professionnelle 1",
          years: [2022, 2021, 2020, 2019, 2018, 2017, 2014, 2012, 2011, 2010, 2009, 2006, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1994, 1993, 1991, 1989, 1988, 1985, 1982, 1976, 1975, 1970, 1960, 1959, 1942],
          img: "placeholder_league.jpg",
          type: "domestic"
      },
      {
          category: "Tunisian Cup",
          years: [2016, 2011, 2008, 2007, 2006, 1999, 1997, 1991, 1989, 1986, 1980, 1979, 1964, 1957, 1939],
          img: "placeholder_cup.jpg",
          type: "domestic"
      },
      {
          category: "Tunisian Super Cup",
          years: [2020, 2019, 2001, 1993, 1960],
          img: "placeholder_supercup.jpg",
          type: "domestic"
      }
      // ... more
  ];
  
  // Get Elements
  const honoursList = document.getElementById("honours-list");
  const showAllButton = document.getElementById("show-all");
  const startYearSelect = document.getElementById("start-year");
  const endYearSelect = document.getElementById("end-year");
  const filterYearButton = document.getElementById("filter-year-button");
  
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
  
  // Event Listeners
  showAllButton.addEventListener("click", () => {
      displayHonours(honoursData);
  });
  
  filterYearButton.addEventListener("click", filterByYear);
  
  // Initial Setup
  populateYearSelects();
  displayHonours(honoursData); // Show all initially