var body = document.querySelector('.body');

var nav = document.querySelector('.nav');
var nav__icon = document.querySelector('.nav__icon');

nav__icon.addEventListener('click', function () {
    body.classList.toggle('nav-close');
    body.classList.toggle('nav-open');
})

// document.addEventListener('click', function (event) {
//     if (!nav.contains(event.target)) {
//         body.classList.remove('nav-open');
//         body.classList.add('nav-close');
//     }
// });