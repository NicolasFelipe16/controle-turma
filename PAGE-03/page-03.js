var notice = document.querySelector('.notice');
var notice_icon = document.querySelector('.notice i');

notice_icon.addEventListener('click', () => {
    notice.style.opacity =  0;
})




var submit_button = document.querySelector('.calculation');

var cards = document.querySelectorAll('.main__card');

var average = 6.0

// var red = '#ff8787';
// var orange = '#ffe16f';
// var green = 'lightgreen';

var scale_1 = 'rgb(255, 135, 135)';
var scale_2 = 'rgb(255, 225, 140)';
var scale_3 = 'rgb(255, 255, 140)';
var scale_4 = 'rgb(235, 255, 140)';
var scale_5 = 'rgb(180, 255, 135)';

submit_button.addEventListener('click', () => {    
    cards.forEach((card) => {
        var content = card.querySelector('.card__content');
        var note_q1 = card.querySelector('.note-q1');
        var note_q2 = card.querySelector('.note-q2');
        var results = card.querySelector('.content__results');

        var q1_n = parseFloat(note_q1.value);
        var q2_n = parseFloat(note_q2.value);
        if (isNaN(q1_n)) {q1_n = 0;}
        if (isNaN(q2_n)) {q2_n = 0;}
        
        var final_note = q1_n + q2_n;
        var extra_note = (final_note - (average * 3)).toFixed(1);
        var required_note = ((average * 3) - final_note).toFixed(1);

        if (required_note > 10) {
            content.style.backgroundColor = scale_1;
            note_q1.style.backgroundColor = scale_1;
            note_q2.style.backgroundColor = scale_1;

        }
        if (required_note <= 10 && required_note > 7) {
            content.style.backgroundColor = scale_2;
            note_q1.style.backgroundColor = scale_2;
            note_q2.style.backgroundColor = scale_2;
        }
        if (required_note <= 7 && required_note > 4) {
            content.style.backgroundColor = scale_3;
            note_q1.style.backgroundColor = scale_3;
            note_q2.style.backgroundColor = scale_3;
        }
        if (required_note <= 4 && required_note > 0) {
            content.style.backgroundColor = scale_4;
            note_q1.style.backgroundColor = scale_4;
            note_q2.style.backgroundColor = scale_4;
        }
        if (required_note <= 0) {
            content.style.backgroundColor = scale_5;
            note_q1.style.backgroundColor = scale_5;
            note_q2.style.backgroundColor = scale_5;
        }



        if (final_note > average * 3) {
            results.innerHTML = 'Está com ' + extra_note + ' pontos acima da média mínima.';
        }
        if (final_note == (average * 3)) {
            results.innerHTML = 'Está exatamente com a média mínima.';
        }
        if (final_note < average * 3) {
            results.innerHTML = 'Precisa de ' + required_note + ' pontos para alcançar a média mínima.';
        }
        if (required_note > 10) {
            results.innerHTML = 'Precisaria de ' + required_note + ' pontos para alcançar a média mínima.';
        }
    })
})
