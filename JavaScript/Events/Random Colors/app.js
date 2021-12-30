const btn = document.querySelector('button');
const h1 = document.querySelector('h1');


function randomColors() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    newcolor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newcolor;
    h1.innerText = newcolor;
}
btn.addEventListener('click', randomColors);