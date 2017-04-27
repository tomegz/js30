const source = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
//get cities data
fetch(source)
    .then(response => response.json())
    .then(data     => cities.push(...data));
//grab search bar and listen for changes
const searchBar = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
searchBar.addEventListener("input", showMatches)

function showMatches() {
    const prefix = this.value;
    const matches = findMatches(prefix);
    appendSuggestions(matches);
}

function findMatches(wordToMatch) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function appendSuggestions(places) {
    let html = "";
    places.forEach(place => {
        html += `<li>
                     <span class="name">${place.city}, ${place.state}</span>
                     <span class="population">${place.population}</span>
                 </li>`;
    });
    suggestions.innerHTML = html;
}