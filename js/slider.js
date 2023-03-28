$(document).ready(function () {

    let cards = $('.card');

    let activeCard = $('.card.active');

    $('#right').on('click', function () {

        activeCard.removeClass('active');

        if (activeCard == (cards.last())) {
            cards.first().addClass('active');
            activeCard = $('.card.active');
        }
        else {
            activeCard.next().addClass('active');
            activeCard = $('.card.active');
        }
    })

    $('#left').on('click', function () {

        activeCard.removeClass('active');

        if (activeCard == (cards.first())) {
            cards.last().addClass('active');
            activeCard = $('.card.active');
        }

        else {
            activeCard.prev().addClass('active');
            activeCard = $('.card.active');
        }
    })
})