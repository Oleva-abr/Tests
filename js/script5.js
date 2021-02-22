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


// Задача 13
// Выполни рефакторинг заменив функцию - конструктор StringBuilder на
// класс с методами.Сделай так, чтобы свойство value было приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов
// в той последовательности, в которой твой код будут проверять тесты.
// Пожалуйста ничего там не меняй.


// class StringBuilder {
//   #value;
//    constructor( baseValue) {
//   this.#value = baseValue;
// }

// getValue () {
//   return this.#value;
// }

// padEnd (str) {
//   this.#value += str;
// }

// padStart(str) {
//   this.#value = str + this.#value;
// }

// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
// }
// }
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='



// Задача 14
// Выполни рефакторинг класса Car.Сделай свойства model
// и price приватными, также как #brand.Стандартизируй публичный
// интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand,
//     model и price для взаимодействия с приватными свойствами.

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// Задача 15
// Выполни рефакторинг класса Car.
// Добавь публичное статическое свойство MAX_PRICE со значением 50000 -
//     максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice.
// Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше
// или равно, то перезаписывает цену автомобиля.


// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice<= Car.MAX_PRICE){
//     this.#price = newPrice;
//     }
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// Задача 16
// Добавь классу Car публичный статический метод checkPrice(price),
//     принимающий цену автомобиля.Метод должен сравнить значения
// параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку
// 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку
// 'Всё хорошо, цена в порядке.'.
// Под объявлением класса мы добавили инициализацию экземпляра
// и вызовы методов, чтобы показать как будет использоваться метод
// checkPrice(price).

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if(price > Car.#MAX_PRICE){
//     return 'Внимание! Цена превышает допустимую.'
//     }
//     return 'Всё хорошо, цена в порядке.'
//   }

//   #price;
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.



// Задача 17
// В приложении нужен администратор с возможностью добавлять
// почты пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User.
// Добавь классу Admin публичное статическое свойство AccessLevel
//     (уровень доступа), значение которого это объект
// { BASIC: 'basic', SUPERUSER: 'superuser' }.


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки

// class Admin extends User {
//    static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser' ,
//   };

// }

// Задача 18
// Добавь классу Admin метод constructor, который принимает один параметр
//     - объект настроек с двумя свойствами email и accessLevel.Добавь
// классу Admin публичное свойсво accessLevel, значение которого будет
// передаваться при вызове конструктора.

// Чтобы показать как будет использоваться класс Admin,
//     мы добавили инициализацию экземпляра под объявлением класса.


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки

//    accessLevel;
//     constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'


//     };
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser


// Задача 19
// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения
// чёрного списка почтовых адресов пользователей.Значение
// по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список.
// Метод должен добавлять значение параметра email в массив хранящийся в
// свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке.
// Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы
// методов в той последовательности, в которой твой код будут проверять тесты.
// Пожалуйста ничего там не меняй.


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
// static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;
//   blacklistedEmails =[];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email){
//   this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email){

//   return this.blacklistedEmails.includes(email)

//   }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });



// MODULE6
// Задача 1.
// Функция calculateTotalPrice(orderedItems) принимает
// один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов,
//     которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так,
//     чтобы вместо цикла for она использовала метод forEach.
// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach (function (item, index) {
//     totalPrice += item;
//   });

//   // Пиши код выше этой строки
//   return totalPrice;
// }





// Задача 2
// Функция filterArray(numbers, value) принимает массив
// чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива,
//     которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

//     numbers.forEach (function(number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }




// Задача 3
// Функция getCommonElements(firstArray, secondArray) принимает два массива
// произвольной длины в параметры firstArray и secondArray, и возвращает новый массив
// их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

//     firstArray.forEach (function (number) {
//       if (secondArray.includes(number)) {
//         commonElements.push(number);
//       }
//     });

//     return commonElements;
//     // Пиши код выше этой строки
//   }

// Задача 4
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// Пиши код ниже этой строки

// const calculateTotalPrice=(quantity, pricePerItem)=> {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }




// -----------------------------------------------------------------------------------------
//     Задача из практики корзина товаров
//           const bag = {
//     products: [],
//     prKey: 0,
// ​
//     createProduct: function(name, price, description) {
//         if (!this.validDataProduct({name, price, description})) return false;
// ​
//         return {name, price, description};
//     },
// ​
//     validDataProduct: ({name, price, description}) => {
//         if (typeof name  !== 'string'  || 
//             typeof price !== 'number'  || 
//             typeof description !== 'string') return false;
// ​
//         return true;
//     },
// ​
//     del: function (id) {
//         if (typeof id !== "number") return false;
// ​
//         let indexP = this.getIndexProduct(id);
//         if (indexP === false) return false;
// ​
//         this.products.splice(indexP, 1);        
//     },
// ​
//     getIndexProduct: function (id) {
//         for (const [index, item] of Object.entries(this.products) )
//             if (item.id === id) return index;
// ​
//         return false;
//     },
// ​
//     add: function (product) {
//         if (typeof product !== 'object' || !this.validDataProduct(product)) return false;
// ​
//         product.id = ++this.prKey;
// ​
//         this.products.push(product);
//     },
// ​
//     update: function (id, data = {}) {
//         if (typeof data !== 'object') return false;
// ​
//         let indexP = this.getIndexProduct(id);
//         if (indexP === false) return false;
// ​
//         const product = this.products[indexP];
//         for (const index in data) {
//             if (typeof product[index] === typeof data[index])
//                 product[index] = data[index];
//         }
//     }
// };
// ​
// bag.add(bag.createProduct('test', 5, 'test test'));
// bag.update(1, {name: 'кухонный нож', price: 10});
// bag.del(1);
// ​
// console.log(bag.products);
// -----------------------------------------------------------------------------------------------

// Задача 5
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;
// // Пиши код выше этой строки


// Задача 6
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.
// Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.

// // Пиши код ниже этой строки
// const calculateTotalPrice=(orderedItems)=> {
//   let totalPrice = 0;

//   orderedItems.forEach((item)=> {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// Пиши код выше этой строки


// Задача 7
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// Пиши код ниже этой строки
// const filterArray=(numbers, value)=> {
//     const filteredNumbers = [];

//     numbers.forEach( (number)=> {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }


// Задача 8
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// Пиши код ниже этой строки
// const getCommonElements =(firstArray, secondArray)=> {
//     const commonElements = [];

//     firstArray.forEach( (element)=> {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // Пиши код выше этой строки
//     return commonElements;
//   }


// Задача 9
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
//     значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers,
//     а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   const array = [];
//   numbers.forEach (element =>{
//       if (element % 2 === 0) {
//        element += value;

//       }
//     array.push(element);
//     });
//   return array;
//     // Пиши код выше этой строки
//   }


// Задача 10
// Дополни код так, чтобы в переменной planetsLengths
// получился массив длин названий планет.Обязательно используй метод map().

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet)=>planet.length);

// Задача 11
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий
// книг(свойство title) из всех объектов массива books.

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки

//   const titles = books.map(book=>book.title);


// Задача 12
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг
//   (свойство genres) из массива книг books.

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки

//   const genres = books.flatMap((book)=>book.genres);

// Задача 13
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей
//   (свойство name) из массива объектов в параметре users.

// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// // Пиши код ниже этой строки
// const getUserNames = users =>users.map(user =>  user.name);  



//   // Пиши код выше этой строки



// Задача 14

// Дополни функцию getUserEmails(users) так, чтоб
// ы она возвращала массив почтовых адресов пользователей(свойство email)
// из массива объектов в параметре users.
// // Пиши код ниже этой строки
// const getUserEmails = users => users.map(user =>  user.email);  



//   // Пиши код выше этой строки






// Задача 15
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers,
//   а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(value => value %2===0);;
// const oddNumbers = numbers.filter(value => value%2===1 );;


// Задача 16
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres)
// из массива books,
//   а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genr,index,array)=>array.indexOf(genr) === index);


// Задача 17
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых(свойство rating)
// больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем(свойство author)
// которое совпадает со значением
// в переменной AUTHOR.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book)=>book.rating>=MIN_RATING);
// const booksByAuthor = books.filter((book)=>book.author===AUTHOR);




// Задача 18
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей
// у которых цвет
// глаз(свойство eyeColor) совпадает со значением параметра color.

// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => users.filter((user)=>user.eyeColor===color);

// // Пиши код выше этой строки



// Задача 19
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей,
//   возраст которых(свойство age) попадает в промежуток от minAge до maxAge.

// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => users.filter((user)=>user.age>=minAge && user.age<=maxAge);
// // Пиши код выше этой строки




//  Задача 20
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив
// пользователей у которых есть друг с
// именем в параметре friendName.Массив друзей пользователя хранится в свойстве friends.

// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) =>users.filter((user)=>user.friends.includes(friendName));
// // Пиши код выше этой строки


// Задача 21
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех
// пользователей(свойство friends).У нескольких пользователей могут быть одинаковые друзья,
//   сделай так чтобы возвращаемый массив не содержал повторений.

// // Пиши код ниже этой строки
// const getFriends = (users) => {
//   const allFriends =users.flatMap(user => user.friends); 
//   const uniqFriends =allFriends.filter((friend,index,array)=>array.indexOf(friend) === index);
//   return uniqFriends;
// };
// // Пиши код выше этой строки



// Задача 22
// Дополни функцию getActiveUsers(users) так, чтобы она
// возвращала массив активных пользователей, значение свойства isActive которых true.
// // Пиши код ниже этой строки
// const getActiveUsers = (users) =>users.filter(user => user.isActive);

// // Пиши код выше этой строки


// Задача 23
// Дополни функцию getInactiveUsers(users) так,
//   чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

// // Пиши код ниже этой строки
// const getInactiveUsers = (users)  =>users.filter(user => !user.isActive);
// // Пиши код выше этой строки




// Задача 24
// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой (свойство title)
//  совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который
//  (свойство author) совпадает со значением переменной AUTHOR.


// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book)=>book.title===BOOK_TITLE);
// const bookByAuthor = books.find((book)=>book.author===AUTHOR);



// Задача 25
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя,
//     почта которого(свойство email) совпадает со значением параметра email.

// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) =>users.find((user)=>user.email===email);
// // Пиши код выше этой строки



//  Задача 26
// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива
// firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива
// firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива
// secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива
// secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов
// массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива
// thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((element)=>element%2===0);
// const eachElementInFirstIsOdd = firstArray.every((element)=>element%2!==0);

// const eachElementInSecondIsEven = secondArray.every((element)=>element%2===0);
// const eachElementInSecondIsOdd = secondArray.every((element)=>element%2!==0);

// const eachElementInThirdIsEven = thirdArray.every((element)=>element%2===0);
// const eachElementInThirdIsOdd = thirdArray.every((element)=>element%2!==0);


// Задача 27
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи
// сейчас активны(свойство isActive) и возвращала true или false.
// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => users.every(user => user.isActive);
   

// // Пиши код выше этой строки


// Задача 28
// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((element)=>element%2===0);
// const anyElementInFirstIsOdd = firstArray.some((element) => element%2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((element) => element%2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((element) => element%2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((element) => element%2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((element) => element%2 !== 0);


// Задача 29
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей
//     (свойство isActive)
// и возвращала true или false.
// Пиши код ниже этой строки
// const isAnyUserActive = (users) => users.some((user)=>user.isActive);
// Пиши код выше этой строки

// Задача 30
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.Дополни код так,
//     чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.


// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc,value)=>{return acc+value},0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;


// Задача 31
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времен
// Рассчитать время для каждого из игроков, можно разделив его время(свойство playtime) на количество игр(свойство gamesPlayed).

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((acc,player)=>{return acc+player.playtime/player.gamesPlayed;},0);
	

// Задача 32
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств
//     (свойство balance) которые хранят пользователи из массива users.

// Пиши код ниже этой строки
// const calculateTotalBalance = users => users.reduce((acc,user)=>{return acc+user.balance},0);
// Пиши код выше этой строки


// Задача 33
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество
// друзей(свойство friends) всех пользователей из массива users.



// Пиши код ниже этой строки
// const getTotalFriendCount = users => 
//   users.reduce((acc,user)=>{return acc+user.friends.length},0); 

// Пиши код выше этой строки


// Задача 34
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива
// releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();


// Задача 35
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания,
//     по её возрастанию или убыванию.Дополни код так, чтобы в переменной ascendingReleaseDates
// получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates
// копия отсортированная по убыванию.


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=>a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b)=>b-a);


// Задача 36
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору,
//     в алфавитном и обратном алфавитном порядке.Дополни код так, чтобы в переменной
// authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors,
//     а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.


// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a,b)=> a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a,b)=> b.localeCompare(a));


// Задача 37
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора
// в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный
// по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// // В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((a,b)=>a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b)=>b.author.localeCompare(a.author));;

// const sortedByAscendingRating = [...books].sort((a,b)=>a.rating-b.rating);

// const sortedByDescentingRating = [...books].sort((a,b)=>b.rating-a.rating);