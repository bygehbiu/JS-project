/* **** Классификация типов данных **** */

"use strict"; // работаем в современном режиме

// числовой тип данных
let number = 4.6; // не целое число задается через .
console.log(-4/0); // в js делить на ноль можно
console.log('string' * 9); // стока умноженная на число не дает результата

// строка пишется в кавычках

const persone = "Alex";

// логический тип данных

const bool = false;
console.log(something); // не существующая переменная defined

let und;
console.log(und); // переменная объяылена но вней ни чего нету undefined 

// тип данных объект

const obj = {
    name: 'Jonh',
    age: 25,
    isMarried: false,
};

// console.log(obj.name); // вызывание параметра через точку
console.log(obj["name"]);

// массив. каждый элемент массива имеет свой порядковый номер. являются комплексными и могут содержать любые типы данных
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);
