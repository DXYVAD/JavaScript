'use strict';

let value = prompt('Какое "официальное" название JavaScript?', '');
if (value == 'ECMAScript') {
    alert('Верно!');
}
else {
    alert('Не знаете? "ECMAScript!"');
}
let number = prompt('Введите число', '');
if (number > 0) {
    alert('1');
}
else if (number == 0) {
    alert('0');
}
else {
    alert('-1');
}