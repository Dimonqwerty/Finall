let sliderImg = document.querySelectorAll('.card2');
let arrowLeft = document.querySelector('#left');
let arrowRight = document.querySelector('#right');
let current = 0;

function startSlide() {
    sliderImg[0].classList.add('active');
}

function point() {
    const activeCardIds = ['1card', '2card', '3card', '4card'];
    const activePointIds = ['1', '2', '3', '4'];

    for (let i = 0; i < activeCardIds.length; i++) {
        const activeCardId = activeCardIds[i];
        const activePointId = activePointIds[i];

        if (document.getElementById(activeCardId).classList.contains('active')) {
            const points = document.querySelectorAll('.point');
            points.forEach(point => point.classList.remove('point-active'));
            document.getElementById(activePointId).classList.add('point-active');
            break;
        }
    }
}

function sliderLEft() {
    sliderImg[current - 1].classList.add('active');
    current--;
}
arrowLeft.addEventListener('click', function () {
    sliderImg[current].classList.remove('active');
    if (current === 0) {
        current = sliderImg.length;
    }
    sliderLEft()
    point()
})

function sliderRIght() {
    sliderImg[current + 1].classList.add('active');
    current++;
}
arrowRight.addEventListener('click', function () {
    sliderImg[current].classList.remove('active');
    if (current === sliderImg.length - 1) {
        current = -1;
    }
    sliderRIght();
    point()
})
startSlide()