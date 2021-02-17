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

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//         const error =  `В ассортименте нет пиццы с названием ${pizzaName}.`

//     if (this.pizzas.includes(pizzaName))
//     { return onSuccess(pizzaName);;}

//  	return onError(error);

//   },

// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);


// Задача 5
// Выполни рефакторинг методов объекта pizzaPalace,
//     расставив отсутствующие this в местах обращения
// к свойствам и методам объекта.

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

// Задача 6
// Перед увольнением разработчик сломал исходный код управления
// аккаунтами пользователей нашего сервиса доставки еды.Выполни
// рефакторинг методов объекта customer,
//     расставив отсутствующие this при обращении к свойствам объекта.

// После объявления объекта мы добавили вызовы методов в той
// последовательности, в которой твой код будут проверять тесты.
// Пожалуйста ничего там не меняй.

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']


// Задача 7
// Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате '
// Готовим < блюдо > для<почта>.Ваш заказ < позиция > -й в очереди.' Позиция это значение 
// параметра position - позиция элемента в массиве(на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта - заказа в контексте которого 
// она была вызывана.
// Дополни код так, чтобы в переменной messages, с помощью метода map, получился массив 
// сообщений о статусе заказов из массива orders.
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки

// function composeMessage(position) {

//     return  `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.` 
// }

// const messages = orders.map((order, i) => {
//   return composeMessage.call(order, i + 1);
// });

// Задача 8
// Выполни рефакторинг кода так, чтобы функция
// composeMessage(position) вызывалась методом apply.
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = orders.map((order, index) =>
//   composeMessage.apply(order, [index + 1])
// );


// Задача 9
// Функция composeMessage(customerName) создаёт приветственные сообщения для ресторанов.
// Дополни код так, чтобы в переменных pizzaPalaceComposer и burgerShackComposer были её
// копии с привязанным контекстом к соответствующим объектам.

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');



// Задача 10
// Сервису рассылки электронной почты необходимо добавить
// логирование действий для сбора статистики.Функция logAndInvokeAction(email, action)
// ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service.
// Сбор статистики симулируется логированием строки.Разберись и дополни код так, чтобы он работал верно.

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe);
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe);
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']





// MODULE 5
// Задача 1
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;



// Задача 2
// Измени код, построив цепочку прототипов так,
//     чтобы объект ancestor был прототипом для parent,
//         а тот в свою очередь был прототипом для child.

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// Пиши код выше этой строки

// Задача 3
// Объяви функцию-конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными
// свойствами brand, model и price, значениями которых должны быть
// переданные аргументы во время её вызова с оператором new.

// function Car (brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Задача 4
// Выполни рефакторинг функции - конструктора Car
// так, чтобы она принимала один параметр - объект со свойсвами brand,
//     model и price.Деструктуризируй объект в сигнатуре(подписи) функции.
// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }


// Задача 5
// Добавь в свойство prototype функции-конструктора Car два метода:

// getPrice() - возвращает значение свойства price из объекта который
// его будет вызывать.
//     changePrice(newPrice) - обновляет значение свойства price
// у объекта который его будет
// вызывать на newPrice.

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }


// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };


// Задача 6
// Напиши функцию - конструктор Storage, которая будет создавать
// объекты для управления складом товаров.Функция ожидает только
// один аргумент - начальный массив товаров, который записывается на
// создаваемый объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items объекта,
//     который вызывает этот метод.
//     addItem(newItem) - принимает новый товар newItem и добавляет его
// в массив товаров в свойстве items объекта, который вызывает этот метод.
//     removeItem(item) -function Storage({ items }) {


// function Storage(items) {
//   this.items = items;
// }
// Storage.prototype.getItems=function(){

//   return this.items;

// };
// Storage.prototype.addItem=function(newItem){
// this.items.push(newItem);
// };
// Storage.prototype.removeItem=function(item){
//   	const indexItem = this.items.indexOf(item);

//  	this.items.splice(indexItem,1);
 
// };



// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"] принимает товар item и удаляет его из массива товаров
// // в свойстве items объекта, который вызывает этот метод.
// // Под комментарием мы добавили инициализацию экземпляра и вызовы методов
// // в тойпоследовательности, в которой твой код будут проверять тесты.
// // Пожалуйста ничего там не меняй.




// Задача 7
// Напиши функцию - конструктор StringBuilder,
//     которая принимает один параметр baseValue - произвольную строку,
//         которая записывается на создаваемый объект в свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
//     padEnd(str) - получает парметр str(строку) и добавляет её в
// конец значения свойства value объекта, который вызывает этот метод.
//     padStart(str) - получает парметр str(строку) и добавляет её в начало
// значения свойства value объекта, который вызывает этот метод.
//     padBoth(str) - получает парметр str(строку) и добавляет её в начало
// и в конец значения свойства value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в
// той последовательности, в которой твой код будут проверять тесты.
// Пожалуйста ничего там не меняй.



// function StringBuilder(baseValue){
// this.value = baseValue;
// }

// StringBuilder.prototype.getValue =function(){
// return this.value;
// };

// StringBuilder.prototype.padEnd =function(str){
// this.value +=str;
// };


// StringBuilder.prototype.padStart=function(str){
  
// this.value =str + this.value;
// };

// StringBuilder.prototype.padBoth=function(str){
// this.value = str + this.value +str;
// };



// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


// Задача 8
// Используя ключевое слово class объяви класс Car с пустым телом.

// class Car{
  
// }

// Задача 9
// Выполни рефакторинг кода, заменив функцию -
//     конструктор Car на класс с методом - конструктором, принимающим объект.

// class Car{
//   brand;
//   model;
//   price;
//   constructor({ brand, model,price }) {
//      this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// Задача 10
// Добавь классу Car две метода.

//     getPrice() - возвращает значение свойства price из объекта который его
// будет вызывать.
//     changePrice(newPrice) - обновляет значение свойства price у объекта
// который
// его будет вызывать на newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

// getPrice() {
// return this.price;
// }
// changePrice(newPrice){
//   this.price = newPrice;
//     }
// }


// Задача 11
// Выполни рефакторинг класса Car так, чтобы свойство brand
// было приватным и добавь два метода для публичного интерфейса,
//     для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
//     changeBrand(newBrand) - изменяет значение приватного свойства
// brand на newBrand.

// class Car {
//   #brand; 
    
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand(){
//   return this.#brand;
//   }
//   changeBrand(newBrand) {
//   this.#brand = newBrand;
//   }
// }


// Задача 12
// Выполни рефакторинг заменив функцию - конструктор Storage
// на класс с методами.Сделай так, чтобы свойство items было приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы
// методов в той последовательности, в которой твой код будут проверять
// тесты.Пожалуйста ничего там не меняй.

// class Storage { #items;
//   constructor( items) {             
//   this.#items = items;
// }

// getItems() {
//   return this.#items;
// }

// addItem(newItem) {
//   this.#items.push(newItem);
// }

// removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// }
// }
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
