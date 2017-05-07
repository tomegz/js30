const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];

addItems.addEventListener("submit", addItem);
populateList(items, itemsList);

function addItem(e) {
    const text = (this.querySelector("[name=item]")).value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
    e.preventDefault();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
       return `
         <li>
           <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""}/>
           <label for="item${i}">${plate.text}</label>
         </li> 
       `; 
    }).join("");
}
