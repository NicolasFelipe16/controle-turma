var cards = document.querySelectorAll('.card__content');

var date = new Date()
const day = date.getDay();
const hour = date.getHours();
const minutes = date.getMinutes();
const fullHour = hour + ':' + minutes;

card = cards[day - 1];

card.style.boxShadow = "none"
card.style.backgroundColor = "var(--color-02)";
card.style.color = "var(--color-05)";
card.style.borderTop = "1px solid var(--color-05)";

var ul = card.querySelector('ul');
var lis = ul.querySelectorAll('li');
var liIndex;

var class1 = {'hour':  7, 'minute': 10, 'index': 0};
var class2 = {'hour':  8, 'minute':  0, 'index': 1};
var class3 = {'hour':  8, 'minute': 50, 'index': 2};
var pause  = {'hour':  9, 'minute': 40, 'index':-1};
var class4 = {'hour': 10, 'minute':  0, 'index': 3};
var class5 = {'hour': 10, 'minute': 40, 'index': 4};
var class6 = {'hour': 11, 'minute': 30, 'index': 5};
var end    = {'hour': 12, 'minute': 20, 'index':-1};

var hours = [class1, class2, class3, pause, class4, class5, class6, end]

for (let i = 0; i < hours.length; i++) {
    if (hour >= hours[i]['hour'] &&
    minutes >= hours[i]['minute'])
    {liIndex = hours[i]['index']}
}

li = lis[liIndex];

li.style.backgroundColor = "var(--color-03-2)";

console.log(hour)
console.log(minutes)
console.log(fullHour)
