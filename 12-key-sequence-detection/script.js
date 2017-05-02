const secretCode = "tomegz";
let sequence = [];

window.addEventListener("keyup", checkSequence);

function checkSequence(e) {
    sequence.push(e.key);
    sequence.splice(-secretCode.length - 1, sequence.length - secretCode.length); 
    if (sequence.join("").includes(secretCode)){
        cornify_add(); 
    }
}