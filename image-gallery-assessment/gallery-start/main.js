const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i < 6; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);
}

const changeImage = (e) => {
    const imgSrc = e.srcElement.getAttribute('src');
    displayedImage.setAttribute('src', imgSrc);
}

thumbBar.addEventListener('click', changeImage);

/* Wiring up the Darken/Lighten button */
