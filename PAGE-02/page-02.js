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
var liIndex = -1;

var class1 = {'hour':  7, 'minute':  9, 'index': 0}; //0
var class2 = {'hour':  7, 'minute': 59, 'index': 1}; //1
var class3 = {'hour':  8, 'minute': 49, 'index': 2}; //2
var pause  = {'hour':  9, 'minute': 39, 'index':-1}; //3
var class4 = {'hour':  9, 'minute': 54, 'index': 3}; //4
var class5 = {'hour': 10, 'minute': 39, 'index': 4}; //5
var class6 = {'hour': 11, 'minute': 29, 'index': 5}; //6
var end    = {'hour': 12, 'minute': 19, 'index':-1}; //7

var hours = [class1, class2, class3, class4, class5, class6, end]

// for (let i = 0; i < hours.length; i++) {if (hour >= hours[i]['hour'] && minutes >= hours[i]['minute']){liIndex = hours[i]['index']}}

// var hour    = 12
// var minutes = 20
// var fullHour = hour + ':' + minutes

var i = 0
while (i < hours.length - 1) {
    if (
        hour == pause['hour'] &&
        minutes >= pause['minute'] + 1  &&
        minutes <= class4['minute'] ||

        hour <= class1['hour'] &&
        minutes <= class1['minute']
    ) { 
        liIndex = pause['index']
        console.log('PAUSE or BEFORE START')
    }
    else if (
        hour === hours[i]['hour'] &&
        minutes >= hours[i]['minute']
    ) {
        liIndex = hours[i]['index']
        // console.log('1')
        break
    }
    
    else if (
        hour === hours[i + 1]['hour'] &&
        minutes <= hours[i + 1]['minute']
    ) {
        liIndex = hours[i]['index']
        // console.log('2')
        break
    }
    i++
}

li = lis[liIndex];

console.log('\nHour: ' + fullHour)
console.log('liIndex: ' + liIndex)

if (liIndex == -1) {console.log('Interval ou end') }
else {li.style.backgroundColor = "var(--color-03-2)";}
