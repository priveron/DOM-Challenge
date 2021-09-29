
const number = document.querySelector("#number");
const color = document.querySelector("#color");
const create = document.querySelector("#create");
const remove = document.querySelector("#remove-selected");
const reset = document.querySelector("#reset");
const boxContainer = document.querySelector("#box-container");

function updateNumbers() {
    for (let i = 0; i < boxContainer.childNodes.length; i++) {
        boxContainer.childNodes[i].textContent = i + 1;
    }
}

create.addEventListener("click", () => {
    for (let i = 0; i < number.value; i++) {
        const el = document.createElement("div");
        el.style.backgroundColor = color.value;
        boxContainer.appendChild(el);
    }
    updateNumbers();
});

remove.addEventListener("click", () => {
    
});

reset.addEventListener("click", () => {
    
});