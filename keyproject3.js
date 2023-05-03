// create constants
const prev = document.getElementById('back-arrow-js')
const next = document.querySelector('.forward-arrow-js')
const slideImage = document.getElementById('change-img-js')
const admiralBtn = document.getElementById('Admiral-btn')
const sliderDots = document.querySelectorAll('.slider-dot')

// add events
prev.addEventListener('click', showPrevImg)
next.addEventListener('click', showNextImg)

// create images array
let imagesSrc = [];
imagesSrc.push('images/windowchair.jpg');
imagesSrc.push('images/room.jpg');
imagesSrc.push('images/RostovOnDon.jpg');

let currentIndex = 0;
slideImage.src = imagesSrc[currentIndex];

// functions definitions
function showPrevImg(event) {
   currentIndex--;
   slideImage.src = imagesSrc[currentIndex];
   if (currentIndex < 0) currentIndex = imagesSrc.length - 1;
   slideImage.src = imagesSrc[currentIndex];
}

function showNextImg(event) {
   currentIndex++;
   slideImage.src = imagesSrc[currentIndex];
   if (currentIndex >= imagesSrc.length) currentIndex = 0;
   slideImage.src = imagesSrc[currentIndex];
}



