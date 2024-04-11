var main__cards = document.querySelectorAll('.main__card');
var card__icons = document.querySelectorAll('.card__icon');
var card__titles = document.querySelectorAll('.card__title');

card__titles.forEach(function (card__title, index) {
    card__title.addEventListener('click', function () {
        main__cards[index].classList.toggle('card-open');
        main__cards[index].classList.toggle('card-close');
    });
});