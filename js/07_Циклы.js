// Для повторения однотипных действий используется прием циклы

let num = 50;

while (num <= 55) { // условие пока что то не выполнено мы выполняем действия. плюсуем по 1
    console.log(num);
    num++;
}

// Второй цикл

// do { // призыв к действию сделай что то
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// Третий цикл. Настраиваемый

for (let i = 1; i <= 10; i++) {
    // if ( i === 6) {
    //     // break; // прерывает выполнение условия
    //     continue; // позволяет пропустить шаг который не нужен но при этом цикл продолжается
    // }
    console.log(i);
    
}
