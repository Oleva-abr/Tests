// Module5
// Задача 1
// ополни код так, чтобы в переменной result был результат
// выполнения функции makePizza,
//     а в переменной pointer была ссылка на функцию makePizza.
//     function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = makePizza(null);
// const pointer = makePizza;

// Задача 2
// Дополни функцию makeMessage так, чтобы она
// ожидала вторым параметром(параметр callback) колбэк -
//     функцию и возвращала ее вызов.Функция deliverPizza или makePizza
// будет передаваться
// как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback (pizzaName);
// }

// Задача 3
// Дополни второй вызов функции makePizza(pizzaName, callback),
//     передав вторым аргументом инлайн колбэк - функцию eatPizza(pizzaName),
//         которая логирует строку 'Едим пиццу <имя пиццы>'

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName){
//   console.log(`Едим пиццу ${pizzaName}.`);
// } );


// Задача 4
// Необходимо написать логику обработки заказа пиццы.
// Выполни рефакторинг метода order так, чтобы он принимал
// вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName,
//     метод order должен возвращать результат вызова колбэка onError,
//     передавая ему аргументом строку
// 'В ассортименте нет пиццы с названием <имя пиццы>.'
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName,
//     метод order должен возвращать результат вызова колбэка onSuccess,
//         передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов.
// Пожалуйста ничего там не меняй.
