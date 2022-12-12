// Объекты это структуры которые могут сохранять в себе любые типы данных в формате ключ: значение. Они также могут быть вложены объекты в объекты, массивы в объекты 
const obj = new Object(); // старое обозначение создания объекта

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
        
    }
};
options.makeTest();
// У объекта есть метод ключи объекта 
console.log(Object.keys(options).length);
// свойства объекта можно получать либо через точку либо через квадратные скобки
console.log(options["colors"]["border"]);

// Деструктаризация объекта. Вытащить данные из объекта, разделить наболее мелкие куски
const {border, bg} = options.colors;
console.log(border);


// console.log(options.name);
// delete options.name; // удаление кокого то параметра в объекте
// console.log(options);

// перебираем все свойства объекта используется конструкция for in 
// for (let key in options) { // ключи это название параметра до двоиточия
//     if (typeof (options[key]) === 'object') { // перебор внутри перебора
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);

//     }

// }

// Функции и методы внутри объекта 
// Узнаем сколько свойств внутри объекта. Прием счетчика

let counter = 0;

for (let key in options) { // ключи это название параметра до двоиточия
    if (typeof (options[key]) === 'object') { // перебор внутри перебора
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

