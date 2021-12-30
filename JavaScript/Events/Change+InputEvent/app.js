const input = document.querySelector("input");

input.addEventListener("change", (e) => {
    console.log(input.value);
})

const h1 = document.querySelector("h1");
input.addEventListener("input", (e) => {
    h1.innerText = input.value;
})