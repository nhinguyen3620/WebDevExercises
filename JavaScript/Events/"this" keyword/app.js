const btn = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

function randomColors() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
   
}

function colorize() {
    this.style.backgroundColor = randomColors();
    this.style.color = randomColors();
}

for (let button of btn) {
    button.addEventListener('click', colorize)
}

for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
}