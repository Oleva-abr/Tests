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