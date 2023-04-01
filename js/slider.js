let sliderImg = document.querySelectorAll('.card2')
let arrowLeft = document.querySelector('#left')
let arrowRight = document.querySelector('#right')
let current = 0

function startSlide() {
    sliderImg[0].classList.add('active')
}

function pointSwap() {
    const activeCardIds = ['1card', '2card', '3card', '4card'];
    const activePointIds = ['1', '2', '3', '4'];

    for (let i = 0; i < activeCardIds.length; i++) {
        const activeCardId = activeCardIds[i]
        const activePointId = activePointIds[i]

        if (document.getElementById(activeCardId).classList.contains('active')) {
            const points = document.querySelectorAll('.point')
            points.forEach(point => point.classList.remove('point-active'))
            document.getElementById(activePointId).classList.add('point-active')
            break
        }
    }
}

function slideLeft() {
    sliderImg[current].classList.remove('active')
    current--
    if (current < 0) {
        current = sliderImg.length - 1
    }
    sliderImg[current].classList.add('active')
    pointSwap()
}

arrowLeft.addEventListener('click', slideLeft);

function slideRight() {
    sliderImg[current].classList.remove('active')
    current++
    if (current === sliderImg.length) {
        current = 0
    }
    sliderImg[current].classList.add('active')
    pointSwap()
}

arrowRight.addEventListener('click', slideRight);

startSlide();

const points = document.querySelectorAll('.point');

points.forEach(point => {
    point.addEventListener('click', () => {
        sliderImg.forEach(slide => slide.classList.remove('active'))
        const cardId = point.id.replace('point', '') + 'card'
        document.getElementById(cardId).classList.add('active')
        current = parseInt(point.id) - 1
        pointSwap()
    })
})