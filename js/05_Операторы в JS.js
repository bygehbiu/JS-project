/* **** Операторы в JS **** */

"use strict"; // работаем в современном режиме

console.log('arr'+ "- object");
console.log(4 + +"5"); // добавив унарный(использует один аргумент для работы) + перед кавычками уже получаем значенение в кавычках число

// Операторы инкримент и декримент

let incr = 10,
    decr = 10; // можно объявлять переменные через запятую и не писать let. В конце обязательно ставить ;
// incr++; // увеличение на один (постфиксная форма, когда плюса и минуса ставятся после оператора)
// decr--; // уменьшение на один
// ++incr; // префиксная форма (перед оператором)
// --decr;

console.log(incr);
console.log(decr);
// console.log(incr++); //постфисная форма сначала возврящает старое значение а после его увеличивает или уменьшает
// console.log(decr--);
console.log(++incr);
console.log(--decr);

console.log(5%2); // оператор % возврящает остаток

console.log(2*4 == 8); // оператор сравнения 
console.log(2*4 === '8'); // оператор строгово сравнения 
console.log(2 + 2 * 2 != '8'); // оператор отрицания компелируется вместе с оператором сравнения 

// оператор 'и' и 'или'

// &&  оператор и
// ||  оператор или

const isChecked = true,
      isClose = false;
console.log(isChecked && isClose); // оператор и возвращает значение true если оба значения будут правдивыми.

const isChecked = true,
      isClose = false;
console.log(isChecked || isClose); // оператор или возвращает значение true если хотя бы одно  значения будут правдивым


// оператор отрицания (если была правда обратит ее в ложь, и на оборот)

const isChecked = false,
      isClose = false;
console.log(isChecked || !isClose); // ставится ! перед переменной

