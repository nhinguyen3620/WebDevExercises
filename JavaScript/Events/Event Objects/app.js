const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    console.log(e);
})

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    console.log(e.key);
    console.log(e.code);
})

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
    }
})