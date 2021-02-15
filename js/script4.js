// Задача 2

//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
//   // Пиши код выше этой строки
// }
// checkPassword('mangohackzor');
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');


// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
 

//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   } 
   
//   return 'Доступ запрещен, неверный пароль!';
//   // Пиши код выше этой строки
// }
// checkPassword('mangohackzor');
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');



// Задача 3
// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки
//   let message;

//   if (ordered === 0) {
//     message = 'В заказе еще нет товаров';
//   } else if (ordered > available) {
//     message = 'Слишком большой заказ, на складе недостаточно товаров!';
//   } else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//   }

//   return message;
//   // Пиши код выше этой строки
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);


// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки
 

//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//   } 
//  if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
 
//   }
//    return 'Заказ оформлен, с вами свяжется менеджер';
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);


// Задача 4
// // Пиши код ниже этой строки
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// Задача 5
// Стартовый код
// const fruits = ['яблоко','слива','груша','апельсин'];
// // Пиши код ниже этой строки
//  const firstElement =fruits[0];
// const secondElement =fruits[1];
// const lastElement = fruits[3];

// Задача 6
// // Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
//  fruits [1] = 'персик';
// fruits [3] = 'банан';

// Задача 7
// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length

// Задача 8
// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex]



// Задача 9
// Напиши функцию getExtremeElements(array) которая принимает один параметр array
//   - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов -
//   первого и последнего элемента параметра array.
// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
//     const deleteArray =array.splice(1, array.length -2);
// return array


//     // Пиши код выше этой строки
//   }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(['Земля', 'Марс', 'Венера']);
// getExtremeElements(['яблоко', 'персик', 'груша', 'банан']);


// Задача 10
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала
// в переменной words результат разделения строки message по разделителю delimeter - массив строк.
// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
  
//   words = message.split(delimeter)
  
//   // Пиши код выше этой строки
//   return words;
// }
// splitMessage('Манго спешит на поезд', ' ');
// splitMessage('Манго', '');
// splitMessage('лучшее_за_неделю', '_');



// Задача про высокосный год
// Високосный год.Просто и без изысков.
// function leapYear(year) {
//   if (year % 4 === 0 && year % 100 !== 0) {
//     console.log(`${year}-й год високосный`)
//   } else if (year % 400 === 0) {
//     console.log(`${year}-й год високосный`)
//   } else {
//     console.log(`${year}-й год невисокосный`)
//   }
// }
// leapYear(2000) // високосный
// leapYear(1900) // не високосный
// leapYear(1904) // високосный
// leapYear(2020) // високосный
// leapYear(2021) // не високосный
// leapYear(1800) // не високосный

// Задача 13
// function slugify(title) {
//   // Пиши код ниже этой строки
 
// const array = title.toLowerCase();
//    const word = array.split(' ');
//   const slug = word.join('-')
//   // Пиши код выше этой строки
//   return slug
// }
// slugify('Массивы для новичков');
// slugify('Английский для разработчика');
// slugify('Десять секретов JavaScript');
// slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ');

// Задача 14
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);


// // Задача 15
// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку

// Задача 16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки

//   const array = firstArray.concat(secondArray);
//   const newArray = array.slice(0, maxLength)
//   return newArray 

    
//     // Пиши код выше этой строки
//   }

// Задача 17
// Функция logNumbersInRange(start, end)
// логирует все целые числа в диапазоне от
// start до end включительно.Дополни тело
// функции так, чтобы она работала правильно.

// const start = 3;
// const end = 7;

// for (let i = start ; i <= end ; i += 1 ) { // Дополни эту строку
//   console.log(i);
// }

//  ЗАдача 18
// Напиши функцию calculateTotal(number), которая принимает целое число
//     (параметр number) и возвращает сумму всех целых чисел от единицы
// и до этого числа.Например, если number равно 3, то сумма это 1 + 2 + 3,
//     то есть 6.
// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   let total = 0;
// for (let i =1; i <= number; i+= 1){
//  total = total + i; 
// }
// return total
//   // Пиши код выше этой строки
// }
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
  
// for(let i=0; i<= order[i]; i+=1){
// total = total + order[i];}
  
//   // Пиши код выше этой строки
//   return total;
// }
//  Задача 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
// for (var i = min; i <= max; i=+1) {
//     numbers.push(i);
// }
//   // Пиши код выше этой строки
//   return numbers;
// }

// Задача 23
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// let NewArray =[];
// for(let i=0; i> value; i +=1){

//  NewArray = numbers.push(i);
// }

//   // Пиши код выше этой строки
// return NewArray;
// } - Не рабочая версия

// Рабочая версия 23 
// function filterArray(numbers, value) {
//  let filteredNumbers = [];
// for(const number of numbers) {
//  if(number > value) {
//    filteredNumbers.push(number);
//  }
// }
// return filteredNumbers;
// } (edited) 

// Задача 24
// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); // Дополни эту строку
// }
 

// Задача 25

// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех
// элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
// let newArray =[];
//   for(let i=0; i< array1.length; i+=1 ){
//     if (array2.includes(array1[i])){
//     newArray.push(array1[i])}
//   }
// return newArray;
  
//   // Пиши код выше этой строки
// }


// Задача 26
// Выполни рефакторинг кода функции
// calculateTotalPrice(order) заменив цикл for на for...of.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Пиши код выше этой строки
//   return total;
// }


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (const element of order) {
//     total += element;
//   }

//   // Пиши код выше этой строки
//   return total;
// }
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const element of numbers) {
//     const number = element;

//     if (number > value) {
//       filteredNumbers.push(element);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }




// Задача 27
// Выполни рефакторинг функции
// filterArray(numbers, value) заменив цикл for на for...of.
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// Задача 28
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3; 

// Задача 29
// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
// let array = [];
//   for(i=start; i<= end; i+=1){
//     if (i%2 ===0){
//   i+=array[i];}}
//   return array;
//     // Пиши код выше этой строки
  
//   }

// Задача 32
// function includes(array, value) {
//   // Пиши код ниже этой строки

//   for (let i= 0; i<= array.length; i+=1){
//   if (value === array[i]){return true;}
//   }
  
// return false;
  
//   // Пиши код выше этой строки
// }


// Module 3
// Задача1
// const apartment = {
// imgUrl:'https://via.placeholder.com/640x480',
// descr:'Просторная квартира в центре',
// rating:4,
// price: 2153,
// tags:['premium', 'promoted', 'top'],};

// // Задача2
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
  
//     owner:{
//         name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//     },}  ;



// // Задача3
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки

// Задача 4
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Пиши код выше этой строки


// // Задача 5
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки


//  Задача 6
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');

// Задача 7
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location ={country:'Ямайка',city: 'Кингстон'};


// Задача 8
// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
//   name,
//   price,
// image,
//   tags

//   // Пиши код выше этой строки
// };

// Задача 9
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]: 'henry.carter@aptmail.com',
//    [passwordInputName]: 'jqueryismyjam'
  
  
//   // Пиши код выше этой строки
// };

// Задача 10
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for ( const key in apartment) {
//   keys.push(key);
// values.push(apartment[key]);}


// Задача 11
// Выполни рефакторинг
// решения предыдущего задания добавив в цикл
// for...in проверку на собственное свойство.
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки

//   keys.push(key);
//   values.push(apartment[key]);

//   // Пиши код выше этой строки
// }

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки

  
// if ( apartment.hasOwnProperty(key)){
// keys.push(key);
//   values.push(apartment[key]);}
//   // Пиши код выше этой строки
// }


// Задача 12
// Напиши функцию countProps(object), которая считает и возвращает
// количество собственных свойств объекта в параметре object.
// Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   for ( const key in object){ 
//   if (object.hasOwnProperty(key)){
//   propCount += 1;}
    
//   }
//   // Пиши код выше этой строки
//   return propCount;
// }


// Задача 13
// Перебери объект apartment используя метод Object.keys() и цикл for...of.
// Запиши в переменную keys массив ключей собственных свойств
// объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);


// for (const key of keys) {
// values.push(apartment[key]);

// }


// Задача 14
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
// const keys = Object.keys(object);
//   for (const key of keys) {
    
//       propCount += 1;
    
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }

// Задача 15
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


// Задача 16
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
// де имя свойства это имя сотрудника, а значение свойства это зарплата.Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
// const keys = Object.keys(salaries);
  
//  for (const key of keys) {
   
// totalSalary += salaries[key];}
//   // Пиши код выше этой строки
//   return totalSalary;
// }



// Задача 17
// Перебери массив объектов colors используя цикл for...of.Добавь в массив hexColors значения свойств hex,
//     в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for(const color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }


// Задача 18
// Напиши функцию getProductPrice(productName) которая принимает
// один параметр productName - название продукта.Функция ищет объект
// продукта с таким именем(свойство name) в массиве products и возвращает
// его цену(свойство price).Если продукт с таким названием не найден,
//     функция должна возвращать null.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
  
  
//   for( const product of products){
//   if (product.name === productName){
//   return product.price;}
//   }
  
//   return null;
  
//   // Пиши код выше этой строки
// }



// Задача 19
// Напиши функцию getAllPropValues(propName) которая принимает один
// параметр propName - имя(ключ) свойства.Функция должна вернуть массив
// всех значений свойства с таким именем из каждого объекта в массиве products.
// в объектах нет свойства с таким именем, функция должна вернуть пустой
// массив.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const array = [];
  
//   for(const product of products){
//     if (product.hasOwnProperty(propName)){
//       array.push(product[propName])
//     }
     
//   }
  
  
//   return array
//   // Пиши код выше этой строки
// }



// Задача 20
// Напиши функцию calculateTotalPrice(productName)
// которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара с
// таким именем из массива products.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
 
// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
// for(const product of products){
//   if(product.name === productName){
// totalPrice= product.price * product.quantity
//   }
//   }

// return totalPrice;
//   // Пиши код выше этой строки
// }




// Задача 21
// Пришел трёхдневный прогноз максимальных температур и мы считаем
// среднюю температуру за три дня(meanTemperature).Замени объявления
// переменных yesterday, today и tomorrow одной операцией деструктуризации
// свойств объекта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// After
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const{yesterday,today,tomorrow} = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow)


// Задача 22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow,icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures


// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;





// Задача 23
// амени объявления переменных highYesterday, highToday,
//     highTomorrow и highIcon одной операцией деструктуризации
// свойств объекта highTemperatures.Задай значение по умолчанию
// для highIcon - строку
// 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday:highYesterday  ,
// today: highToday,
// tomorrow:highTomorrow,
// icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;




// Задача 24
// Выполни рефакторинг цикла for...of так,
//     чтобы в нём использовалась деструктуризация объекта..
//     const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

//  for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
//  }


// Задача 25
// Мы получили прогноз погоды на два дня,
//     с минимальными и максимальными температурами,
//     а также необязательными иконками.Замени объявления всех
// переменных одной операцией деструктуризации свойств объекта forecast.
// Задай значение по умолчанию для иконок, переменных todayIcon и
// tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки

// const { today: {high: highToday, low: lowToday, icon:todayIcon='https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'},
//     tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon=
//                'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}} = forecast;



// Задача 26
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast
//     - объект температур на два дня следующего формата.

//     // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const todayLow = forecast.today.low;
//   const todayHigh = forecast.today.high;
//   const tomorrowLow = forecast.tomorrow.low;
//   const tomorrowHigh = forecast.tomorrow.high;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const{today: { low: todayLow, high: todayHigh },
//   tomorrow: { low: tomorrowLow, high: tomorrowHigh}}= forecast;
 

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


// Задача 26
// В переменной scores хранится массив результатов тестирования.
// Используя распыление и методы Math.max() и Math.min()
// дополни код так, чтобы в переменной bestScore был самый высокий балл,
//     а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = (Math.max(...scores));
// const worstScore = (Math.min(...scores)); ;



// Задача 27
// В переменных firstGroupScores, secondGroupScores
// и thirdGroupScores хранятся результаты тестирования отдельных групп.
// Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов
// от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = (Math.max(...allScores));
// const worstScore = (Math.min(...allScores));

//  Задача 29
// В конструкторе можно создавать новые тесты,
//     для которых есть настройки по умолчанию которые хранятся
// в переменной defaultSettings.Во время создания теста, все или
// часть настроек можно переопределить, они хранятся в переменной
// overrideSettings.

// Для того чтобы получить финальные настройки теста,
//     необходимо взять настройки по умолчанию и поверх
// них применить переопределённые настройки.Дополни код так,
//     чтобы в переменной finalSettings получился объект финальных
// настроек теста.

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings,...overrideSettings};



// Задача 30
// Напиши функцию makeTask(data) которая принимает
// один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый
// объект задачи, не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed,
//     значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text,
//     а остальные два, category и priority, могут отсутствовать.
//     Тогда, в новом объекте задачи, в свойствах category и
// priority должны быть значения по умолчанию, хранящиеся в
// одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
// const unitedData = {completed: false, category: 'Общее', priority : 'Обычный', ...data};
//   const unitedData;
//   // Пиши код выше этой строки
// }



// Задача 31
// Используя операцию rest дополни код функции add() так,
//     чтобы она принимала любое количество аргументов,
//     считала и возвращала их сумму.

//  function add(...args) {

//  let result =0;
//    for (let i = 0; i < args.length; i++) {
//      result += arguments[i];
//   }

//    return result;}



// function add(...args) {
//  let sum = 0;
//  for (const arg of args) {
//    sum += arg;
//  }
//  return sum;

// // Пиши код ниже этой строки
// function add(...args) {
//   let Sum =0;
//   for (const arg  of args){
  
//   Sum += arg;}
//   return Sum;
//   // Пиши код выше этой строки
// }


// Задача 32
// Функция addOverNum() считает сумму всех аргументов.Измени параметры и
// тело функции addOverNum() так,
//     чтобы она считала сумму только тех аргументов,
//         которые больше чем заданное число.Это число должно быть первым параметром функции.

// Пиши код ниже этой строки

// function addOverNum(firstArg,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg>firstArg){
//     total += arg;}
//   }

//   return total;
//   // Пиши код выше этой строки
// }


// Задача 33
// Функция findMatches() принимает произвольное количество аргументов.
// Первым аргументом всегда будет массив чисел,
//     а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches,
//     в котором будут только те аргументы, начиная со второго,
//         которые есть в массиве первого аргумента.

//     Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// должна вернуть массив[1, 2], потому что только они есть
// в массиве первого аргумента.


// Пиши код ниже этой строки
// Пиши код ниже этой строки
// function findMatches() {
//   const matches = []; // Не изменяй эту строку

//   // Пиши код выше этой строки
//   return matches;
// }



// // Пиши код ниже этой строки
// function findMatches(arr,...args) {
//   const matches = []; // Не изменяй эту строку
// for(const arg of args){
// if(arr.includes(arg)){
// matches.push(arg);}
// }
//   // Пиши код выше этой строки
//   return matches;
// }


// Задача 34
// Добавь объекту bookShelf ещё два метода,
//   которые пока что будут возвращать просто строки
// по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени.
// Возвращает строку 'Удаляем книгу <имя книги>',
//   где < имя книги > это значение параметра bookName.

// Метод updateBook(oldName, newName)
// будет обновлять название книги на новое.
// Возвращает строку 'Обновляем книгу <старое имя> на <новое имя>',
//   где < старое имя > и < новое имя > это значения параметров oldName
// и newName соотвественно.

// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//   return `Обновляем книгу ${oldName} на ${newName}`;
//   }
  
//   // Пиши код выше этой строки
// };
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
// 	 const oldBook = this.books.indexOf(oldName);
//     this.books.splice(oldBook,1, newName);
// 	    // Пиши код выше этой строки
//   },
// };



// Задача 36
// К нам обратилась владелица лавки зелий
// «У старой жабы» и заказала программу для ведения инвентаря
//   - добавления, удаления, поиска и обновления зелий.Добавь
// объекту atTheOldToad свойство potions, значением которого сделай
// пустой массив.

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],

//   // Пиши код выше этой строки
// };

// Задача 37
// Добавь объекту atTheOldToad метод
// getPotions(), который просто возвращает
// значение свойства potions.

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions(){
//   return this.potions}
//   // Пиши код выше этой строки
// };





// Задача 38
// Дополни метод addPotion(potionName) так, чтобы он добавлял
// зелье potionName в конец массива зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
      
//     this.potions.push(potionName);
 
//     // Пиши код выше этой строки
//   },
// };

// Задача 39
// Дополни метод removePotion(potionName) так,
//   чтобы он удалял зелье potionName из массива
// зелий в свойстве potions

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//         const potionsIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionsIndex,1);
//     // Пиши код выше этой строки
//   },
// };

// Задача 40
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обно
// название зелья с oldName на newName, в массиве зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//  const potionsIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionsIndex,1,newName);
//     // Пиши код выше этой строки
//   },
// };


// Задача 41
// Заказчица хочет чтобы каждое зелье было представлено не
// только именем, но и ценой, а в будущем может быть и другими
// характеристиками.Поэтому теперь в свойстве
// potions будет храниться массив объектов со следующими
// свойствами.
// Выполни рефакторинг методов объекта atTheOldToad так,
//   чтобы они работали не с массивом строк, а с массивом объектов.

//   getPotions() - метод для получения всех зелий.
// Возвращает значение свойства potions.
//   addPotion(newPotion) - добавляет зелье
// newPotion(уже объект) в массив в свойстве potions.
//   removePotion(potionName) - удаляет объект зелья с именем
// potionName из массива в свойстве potions.
//   updatePotionName(oldName, newName) - обновляет свойство
// name объекта - зелья с названием oldName на newName в массиве potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Зелье ${newPotion} уже есть в инвентаре!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(newPotion) {
   
// 	for(let i=0; i<this.potions.length; i+=1){
//      if(this.potions[i].name === newPotion){this.potions.splice(i, 1);} }
  
      
//     },
  
//   updatePotionName(oldName, newName) {
    
//     for(let i=0; i<this.potions.length; i+=1){ if(this.potions[i].name === oldName){
//       this.potions[i].name = newName;
//     }}
 
//   },
//   // Пиши код выше этой строки
// };

