const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

//querySelector only returns the 1st matching element
const links = document.querySelectorAll('p a'); //anchor tag inside paragraph
for (let link of links) {
    console.log(link.href)
}

const test = document.querySelector('a[title="Java"]');


