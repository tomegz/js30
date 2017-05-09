const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandList = document.querySelector("#bands");

const sortedBands = bands.sort((a, b) => strip(a.toLowerCase()) > strip(b.toLowerCase()) ? 1 : -1);

const html = sortedBands.map(band => `<li>${band}</li>`).join("");
bandList.innerHTML = html;

function strip(sentence) {
    return sentence.replace(/^(a |the |an )/i, "").trim();
}
