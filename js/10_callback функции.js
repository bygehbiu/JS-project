// Callback Эта функция которая должна быть выполнена после того как другая функция выполнила свое завершение
// Данная функция имеет какую то задержку. Например для того чтобы общаться с сервером, или обработка сложных и тяжелых данных

function first () {
    // do something
    setTimeout(function() {
        console.log(1);
    }, 500); // задержка в полсекунды 
}

function second () {
    console.log(2);
    
}
first();
second();

function learnJS (lang, callback) {
    console.log(`Я учу: ${lang}`); // Сначала выполнится первая функция затем вторая
    callback();
}

function done (){
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done); // здесь мы передаем функцию поэтому она без круглых скобок