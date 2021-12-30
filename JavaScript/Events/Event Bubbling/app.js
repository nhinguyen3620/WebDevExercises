const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');


const randomColors = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}


button.addEventListener('click', (e) => {
    container.style.backgroundColor = randomColors();
    e.stopPropagation();
})

container.addEventListener('click', (e) => {
    container.classList.toggle('hide');
})