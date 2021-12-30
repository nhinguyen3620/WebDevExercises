const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newLi = document.createElement("LI");
    newLi.innerText = input.value;
    list.append(newLi);
    input.value = "";
})