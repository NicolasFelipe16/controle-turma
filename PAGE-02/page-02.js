var cards = document.querySelectorAll('.card__content');

var card__titles = document.querySelectorAll('.card__title');

var date = new Date()
const day = date.getDay();

card = cards[day - 1];
title = card__titles[day - 1];

card.style.boxShadow = "none"
card.style.backgroundColor = "var(--color-02)";
card.style.color = "var(--color-05)";

title.style.borderBottom = "1px solid var(--color-05)";