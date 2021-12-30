const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("You clicked me! (v2)");
}

function scream() {
    console.log("AAAAHHH");
    console.log("Stop touching me!");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert("You clicked the h1!");
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', () => {
    alert("CLICKED")
})

function twist() {
    console.log("TWIST!");
}

function shout() {
    console.log("SHOUT!");
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist; 
// tasButton.onclick = shout; //overwrite the previous one

//can do both at the same time
tasButton.addEventListener('click', twist, {once: true});
tasButton.addEventListener('click', shout);