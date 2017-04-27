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
    const regex = new RegExp(prefix, 'gi');
    const places = findMatches(regex);
    const htmlToAppend = places.map(place => {
        const cityName = place.city.replace(regex, `<span class="hl">${prefix}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${prefix}</span>`);
        const population = numberWithCommas(place.population);
        return `<li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${population}</span>
                </li>`;
    }).join("");
    suggestions.innerHTML = htmlToAppend;
}

function findMatches(regex) {
    return cities.filter(place => {
        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
