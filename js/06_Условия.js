"use strict";
// Все условия начинаются с оператора if. Условия превращают любой тип данных в булиновый для того что бы проверить правдивость

if (4 == 9) {
    console.log('Ok');

} else {
    console.log('error');

}
// проверяем условия во вложенных переменных

// const num = 50;
// if (num < 49) {
//     console.log('error');

// } else if (num > 100) { // запись else if говорит о том что проверяется еще одно условие
//     console.log('Много');

// } else {
//     console.log('ok');

// }



// тернарный оператор это знак ?. Такая запись позволяет экономно записать код. В тернарном операторе участвуют сразу три условия (он единственный в JS)
// (num === 50) ? console.log('ok'): console.log('error');



// Конструкция switch. Всегда идет на строгое сравнение

const num = 50;
switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('ok');
        break;
    default:
        console.log('не в этот раз');
        break;
}