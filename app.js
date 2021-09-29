
const number = document.querySelector("#number");
const color = document.querySelector("#color");
const create = document.querySelector("#create");
const remove = document.querySelector("#remove-selected");
const reset = document.querySelector("#reset");
const boxContainer = document.querySelector("#box-container");

function updateNumbers() {
//     for (let i = 0; i < boxContainer.childNodes.length; i++)
//         boxContainer.childNodes[i].textContent = i + 1;
        boxContainer.childNodes.forEach((v, i) => v.textContent = i + 1);
}

create.addEventListener("click", () => {
    for (let i = 0; i < number.value; i++) {
        const el = document.createElement("div");
        el.style.backgroundColor = color.value;
        el.addEventListener("click", () => {
            el.classList.toggle("is-active");
        });
        boxContainer.appendChild(el);
    }
    updateNumbers();
});

remove.addEventListener("click", () => {
    let box = [...boxContainer.childNodes].filter((v) => v.classList.contains("is-active"));
    box.forEach((v) => boxContainer.removeChild(v));
    updateNumbers();
});

reset.addEventListener("click", () => {
    [...boxContainer.childNodes].forEach((v) => boxContainer.removeChild(v));
    updateNumbers();
});