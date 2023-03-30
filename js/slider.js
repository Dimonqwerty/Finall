let sliderImg = document.querySelectorAll('.card2');
let arrowLeft = document.querySelector('#left');
let arrowRight = document.querySelector('#right');
let current = 0;
console.log(sliderImg);

function startSlide() {
    sliderImg[0].classList.add('active');
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
})
startSlide()

// отримуємо всі блоки та кнопки
const blocks = document.querySelectorAll('.block');
const buttons = document.querySelectorAll('.button');

// проходимось по кожному блоку
blocks.forEach((block, index) => {
    // перевіряємо чи є у блоку class="active"
    if (block.classList.contains('active')) {
        // якщо так, то додаємо class="btn-active" до відповідної кнопки
        buttons[index].classList.add('btn-active');
    }
});
