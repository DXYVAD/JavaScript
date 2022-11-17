'use strict';
//ex1
let age = prompt('Введите возраст', '0');
if (14 <= age && age <= 90) {
    alert('true');
}
//ex2
/*
else if (14 > age || age > 90) {
    alert('false');
}
*/
else if (14 > age || age > 90) {
    alert(!true);
}
