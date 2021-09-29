
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

function determineTextColor(hexcolor) {
    // this is copied and pasted from stackoverflow 
    // https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
}

create.addEventListener("click", () => {
    for (let i = 0; i < number.value; i++) {
        const el = document.createElement("div");
        el.style.backgroundColor = color.value;
        el.style.color = determineTextColor(color.value);
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