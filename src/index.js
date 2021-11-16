// Занятие 2 цыклы, условные операторы,массывы module 1.2

// function checkWords(message) {

//     // создаем массив     запрещенных слов
   
//     const words = ['spam', 'sale', 'virus'];
    
//     // конвертируем слова в нижний регистр

//     const str = message.toLowerCase();

//     //задаем изначальное значение для проверки запрещенных слов в массиве

//     let hesSpam = false;

//     // перебираем элементы массива через цикл
     

//     for (let i = 0; i <= words.length; i += 1) {
        
//         // Присваиваем перебранные элементы массива в новую переменную

//         const word = words[i];

//         //Проверяем на запрещенные слова  в массиве

//         if (str.includes(word)) {
            
//             hesSpam = true;

//             break;
//         }


//     }

//     console.log(hesSpam);

//     return hesSpam;

// }


// checkWords('spam');




//Задача: проверка пароля (ранний возврат)

// Создаум функию на проверку совпадения паролей

// function checkPassword(password) {
    
  // Переменная с паролем админа

    // const ADMIN__PASSWORD = 'Dh!123456';

    // Проверка на совпадение

    // if (password === ADMIN__PASSWORD) {
        
    //     console.log("Welcome!")

    //     return "Welcome!";
    // }


//     console.log("Access denied, wrong password!");

//     return  "Access denied, wrong password!";

// }


// checkPassword('Dh!123456');





// const checkNum = 75;


// console.log(!checkNum && checkNum)



// function productWarehouse(order, accessible) {
    

//     if (order === 0) {
        
//         console.log('Ваш заказ пуст');

//         return order;
  
//     } else if (order >= accessible) {
        
//         console.log('Товара нет на складе');
        
//         return order

//     }

//     console.log("Заказ оформлен, ожидайте звонка менеджера")


//     return order;
// }



// productWarehouse(0)

//======== Обычное выполнение функции, на прверку  

// function productWarehouse(accessible,order) {
    

//     if (accessible === 0) {
        
//         console.log('Ваш заказ пуст');

//         return;
        
//     } else if (accessible < order) {
        
//         console.log('такое кол-во товара отсутствует на складе')

//         return;
//     }

//     console.log("Ваш заказ принят, ожидайте звонка нашего менеджера");

   

// }

// productWarehouse(10,20);

// Примениние рефакторинга "паттерн ранний возвртат выполнения отдельного блока кода, в условной конструкции"

// function checkStorage(ordered,available) {
    
    


//     if (ordered === 0) {
        
//         console.log('Ваш заказ пуст');

//         return;
//     }

//     if (ordered > available) {
        
//          console.log('Заказ принят, ожидайте звонка нашего менеджера');

//         return;

//     }

//     if (ordered < available) {
        
//         console.log('Недостаточно продукции на складе');

//         return;
//     }

   
//     // console.log('Произошла ошибка, свяжитесь с нами');

//     // return;

// }

// checkStorage(0)



// Примениние рефакторинга "паттерн ранний возвртат выполнения отдельного блока кода, в условной конструкции"


// function checkStorage(number, order) {
    

//     if (order === 0) {
        
//         return ' Ваш заказ пуст'

//     }

//     if (number > order) {
        
//         return 'Ваш заказ принят, ожидайте звонка нашего менеджера'

//     }

//     if (number < order) {
        
//         return 'Такого кол-во товара, отсутствует на складе'
//     }


// }


// checkStorage(0)


//Цикл со счеткином используется если необходимо переопределить значение элемента в массиве

//Создаем массив 
// const elements = [25, 40, 65];

//Переопределяем элемент массива через индекс элемента

// elements[0] = 43;

// Перебераем массив через цикл for

// for (let i = 0; i < elements.length; i += 1) {


//      elements[i] += ' - element ';

    // Выводим элементы массива в консоль
//     console.log(elements[i]);

// }


//Данная функция возвращяет первый и последний элемент массива способ 1

// function getArray(array) {

    
    
//     let remElem = array.length - 2;


//     array.splice(1,remElem)

//     return array;

   
// }

// console.log(getArray([1, 2, 3, 4, 5, 6, 7, 8]))

// console.log(getArray(["Earth", "Mars", "Venus"]))

// console.log(getArray(["apple", "peach", "pear", "banana"]))



//Данная функция возвращяет первый и последний элемент массива способ 2



// function getArray(array) {
    
//     let arr = [array[1], array[array.length - 2]];


//     console.log(arr);

//     return arr;
// }



// getArray([1,2,3,4,5])

//Объявлена функция calculateEngravingPrice(message, pricePerWord). 
//Эта функция принимает строку, состоящую из слов разделённых только пробелами(параметр message) 
//и цену гравировки одного слова(параметр pricePerWord).


// function calculWords(message,priceWord) {
    
   

//     let result = message.split(" ");
    
//      result =  priceWord * result.length


//    console.log(result)

//     return result;

// }

// calculWords('qddq q dqdqwd qdqddqw qwdqddwqd', 40)





//генератор slug

//   function slugify(title) {
  

//      let slug = title.toLowerCase().split(' ').join('-');
  
      
    
      
//       console.log(slug)
      
//        return slug;

 
// }


 

// slugify('UYTFYTFYT qwdqewdplq wsdqdqdwdq')


// let products = ['Hoco', 'Jelico', 'Joyroom'];


// let remProd = products.slice(1, 3);


// console.log(remProd)

// Напиши скрипт который посчитывает сумму всех четных чисел в массиве

//  const numbers = [2, 40, 4, 2, 58, 6, 4,35,9,41];

//   let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];

//   console.log(number);

//   if (number % 2 === 0) {
    
//     console.log('Четное число!!!');

//     total += number;

//   }


  
// }

// console.log('Total:',  total);


// Споcоб второй, цикл for of 


// for (let number of numbers) {
  
//   console.log(number);
  
//   if (number % 2 !== 0) {
    
//     console.log('Эту итерацию нужно пропустить');
//     continue;

//   }

//   console.log(`${number} - четное!!!`);
//   total += number;

// }


// console.log('Total: ', total)



// const logins = ['deN2525', 'vAsya451', 'petya458'];


// const login = 'den2525';

// let message;

// for (let i = 0; i < logins.length; i++) {
//   const element = logins[i];

//   console.log(element)

//   if (login === element) {
    
//     console.log("")
    
//   }
  
// }

// Написать скрипт для поиска логина, если логин не найден выводим сообщение что не найден, если найден, то выводим сообщение что найден


// 1. Создать массив логинов

// const logins = [ 'vAsya451', 'petya458','dqeqdqdwqdwq','deN2525'];

//2. Переменная которая хранит логин который ишем 

// const userLogin = 'deN2525';

// let message = `Пользователь ${userLogin} не найден`;

// 3. Перебрать массив логинов

// for (let i = 0; i <  logins.length; i += 1) {
//   const allLogins = logins[i];
  
//   console.log(allLogins);

//   console.log(`${login} === ${allLogins}: ` , login === allLogins)

  //4. Ищем логин который нам нужен

//   if (allLogins !== login  ) {
    
//     console.log('Ура равны!!!')
   
//     message = `Пользователь ${login} найден`;

//     break;

//   }
  
  


  
// }

// console.log(message)

// способ решения через for of получаем рефакторинг кода

// for (const login of logins) {
  
//   console.log('Login: ', login);

//    console.log(`${login} === ${userLogin}: ` , login === userLogin)

//   if (userLogin === login) {
    
//     message = `Пользователь ${userLogin} - найден!!!`
    
//   }

// }

// console.log(message)


// console.log(logins.includes(userLogin))

// Третий способ решения задачи метод includes включает в себя переборку массива, сравнение переменных
// const message = logins.includes(userLogin)
//   ? `Пользователь ${userLogin} -  найден`
//   : `Пользователь ${userLogin} - не найден`

// console.log(message)


// function sliceWords(firstdArray, secondArray, maxLength) {
  
//   let allArray = firstdArray.concat(secondArray);

//   let res = allArray.split("  ");
 
//   if (res.length > maxLength) {
    
//     return res.slice(0, maxLength);

//   }

  
//   console.log(res);

//   return res;


// }


// sliceWords("Grisha","Gosha","Masha","Vitya")


// function totalNum(number) {
  
//   let total = 0;


//   for (let i = 0; i < number; i+= 1) {
   
   

//     total += number[i];

//     console.log(total);

//     return total;
    
//   }

// }

// totalNum(3)


// let numbers = [1, 35, 40, 80, 21, 30];



// let minNum = numbers[3];

// for (let i = 0; i < numbers.length; i += 1) {
  
//   if (minNum > numbers) {
    
//     minNum = numbers;
    

//   }
 
// console.log(minNum)
// }
  



// for (const number of numbers) {
  
//   if (number < minNumber) {
//     minNumber = number;
//   }
// }

// console.log(minNumber)




// function calkNum(number) {

//   let result = 0;

//   for (let i = 0; i <= number; i += 1) {


//     result += i

//   }

//   console.log(result);

//   return result;

// }


// calkNum(2)
 


// let arr = [1,2,3,4,5];

// let res = 0;

// for (let i = 0; i <= arr.length; i += 1) {
  

 


//   res += i

//   console.log(res)

// }


// function calculateTotalPrice(order) {
//   let total = 0;
  
//   for (let i = 0; i < order.length; i += 1)
    
     
//     total += order[i];
  
//     console.log(total)
  
//      return total;
// }


// calculateTotalPrice([2,4])


// const userName = 'Den';


// console.log(userName.join('  '))






// function findLongestWord(string) {
  

  
  

  //  let words = string.join() ;

  // for (let i = 0; i < words.lenght; i += 1) {

  //    console.log(words[i]);
   
  //   return words[i];

  // }

     
//   console.log(words);
   
//     return words;

// }


// findLongestWord()


// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("  ")); // "JavaScriptэтоинтересно"


// function findLongestWord(string) {
 
 
//   let words = string.split("  ");


//    let longWord = words[0];

//   for (let i = 0; i < words.length; i += 1) { 

//     if (words[i].length > longWord.length) {
      
//       longWord = words[i];

//     }
  
//   }
//   console.log(longWord)

//       return longWord;
 
  
// }



// findLongestWord()


// let numbers = [2, 8, 12, 40];

// let number = numbers[0];

// for (let i = 0; i < numbers.length;i+=1) {
  
//   number = numbers[i];

//   if (numbers.length > number) {
    
//     console.log ('Маленькое число - ', + number)
    

//   }
// }

// let users = ["Vasya","Den", "Petya", "Kolya",];

// let user = "Vasya";

// let message =  `Пользователь ${user} не найден`




// for (let i = 0; i < users.length; i += 1) {
  
//   const nameUser = users[i];


// console.log('nameUser: ', nameUser)

// console.log(`${nameUser} === ${user}:`, nameUser === user )



//   if (nameUser === user) {
    
//     message = `Пользователь ${user} - найден`
//     break;

//   }

  

// }
// console.log(message)




// let usersNames = ["Vasya", "Den", "Kolya", "Petya"];

// const userName = "Den"

//  let message = `Пользователь ${userName} не найден`

// for (const name of usersNames) {
  
//    if (name === userName) {
    
//    message = `Пользователь ${userName} - найден`

//     break;
//   }
    
// }

// console.log(message)


// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];



//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }



// let numbers = [35, 40, 70, 85,105];


// let number = [90];

// let message = `Число ${number} меньше `


// for (const element of numbers) {
  
//   if (element > number) {
    

//     message = `Число ${element} больше чем ${number}`
    

//   }

// }

// console.log(message)


// let numbers = [8,11,12,15,20];

// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
  

//   // console.log(numbers[i]);

//   if (numbers[i] % 2 === 0) {
    
//     total += numbers[i];

//     console.log(total)

//   }

// }



// let arr = [10, 9, 7, 5, 8, 4];

// let total = 0;

// for (const num of arr) {
  
//   if (num % 2 === 0) {
    
//     total += num;
 
//     console.log(total)
//   }

// }


// function evenNumber(start, end) {
  
//   let even = [];


//   for (let i = start; i < end; i += 1) {
    
//     let number = i;

//     if (number % 2 === 0) {
      
//       even.push(number);

//     }

//   }

//   console.log(even);


//   return even


// }


// evenNumber(6,12)


// function includes(array, value) {
  
  

//   for (let i = array; i < value;i += 1) {
    
//     let result = i;

//     if (result === value) {
      
//        console.log(result)
//      return false

//     }

//   }
 

//   return true
// }

// includes([1,4,5],7)



// Функции


// const add = function(numberOne,numberSecond){
  
 
//   let result = numberOne + numberSecond

//   console.log(`Результат выполнения функции add - ${result}`)

//   return result
// };

// const r1 = add(10, 50);

// console.log(r1)

// const r2 = add(20, 74);

// console.log(r2);


// const r3 = add(42, 74);

// console.log(r3);

//  Использование возврата результата return

// const fun = function fn(value) {

 
  
 

//   if (value !== null) {
    
//     return true

//   } 
    
//      return false
// };

// console.log('Результат выполнения функции : ',fun())



// Стек вызова функции


// const fName = function Name() {
  
//   console.log('Denis');

//   fSurname();

// }

// const fSurname = function Surname() {
  
//   console.log('Hutin')
  
//   fPatronymic();

// }

// const fPatronymic = function Patronumic() {
  
// console.log('Vladimirovich')

  
//   console.log()
// }




// fName();



// const calc = function (items) {
  
// console.log('Items внутри функции: ', items)

//   let total = 0;

//   for (const item of items) { 

//     total += item;
//   }

//  return total
// }


// const r1 = calc([10,20]);


// console.log(`Общая сумма массива - ${r1}`)
// console.log(calc([10, 40, 54, 47, 2]))

// console.log(calc([10, 40, 54, 47, 2]))


 
// const usersLogins = ["Den2525", "Curator", "SuperMan", "Assasin"];
// const userLogin = "Curator";


// const message = usersLogins.includes(userLogin) ?
//   `Пользователь ${userLogin} найден` :
//   `Пользователь ${userLogin} не найден`;


// const findLogin = function (allLogins, loginToFind) {
  
// for (const login of allLogins) {
    
// if (login === loginToFind) {
//       return `Пользователь ${loginToFind}  найден!`
//     }
//   }
//   return `Пользователь ${loginToFind} не найден!`

  
//    return  allLogins.includes(loginToFind) ?
      
//     `Пользователь ${loginToFind} найден` :
  
//     `Пользователь ${loginToFind} не найден`;
  
  
// };






// console.log(findLogin(usersLogins, 'Den2525'))

// console.log(findLogin(usersLogins, 'Vasya'))

// console.log(findLogin(usersLogins,'Petya'))
  
// Инверсия строки в большой либо маленький регистр

// const words = function (string) {
  
//   let arrString = string.split('');

//   let invertedString = '';


//   for (const arrayWords of arrString) {
    

//     const isInLoswerCase = arrayWords === arrayWords.toLowerCase();

//          invertedString += isInLoswerCase
      
//           ? arrayWords.toUpperCase()

//           : arrayWords.toLowerCase();
//       }
//      return invertedString;
    
   
  
// }



// console.log(words("QWErty"))
  
//  console.log(words("DEN4i"))



// const slugify = function (greeting) {
  
//   return greeting.toLowerCase().split('').join('__');
  
// }
// console.log(slugify("Hello my name is Den"))


//Псевдомассив arguments



// const fn = function (...args) {
  
//   console.log(args)

//   let total = 0;

//   for (const arg of args) {
    
//     if(arg < 0)

//     total += arg;
//   }

//   return total;

  
 
 // способ второй

  //...args

  //способ первый для создания маасива

  //const args = Array.from(arguments);


  // console.log(args)

// 


// const filterNumber = function (arr, ...args) {
  
//   console.log(`array: ${arr}`);

//   console.log(`args: ${args}`);

 

//   let newArray = [];


//   for (const array of arr) {
    
//     if (args.includes(array)) {
      
//       newArray.push(array);

     

//        console.log(`${array} есть везде!`)

//     }

//   }

//   return newArray;

// }
 


// console.log(filterNumber([1, 25, 45, 4, 26, 78], 1, 26, 78, 7))

// console.log(filterNumber([200,478,78,321],1,26,300,200,321)


// const calc = (weight, height) => {
  
//   const weightNum = parseFloat(weight.replace(',', '.'));


//   const heightNum = parseFloat(height.replace(',', '.'));
  

//   const weightIndex = (weightNum / Math.pow(heightNum,2)).toFixed(1);

//   return weightIndex;
  
// }


// const res = calc('12', '4');

// console.log(res);

//Обычная функция 

// function min(a, b) {
  
// const res =  Math.min(a, b);

//   console.log(res);
  
//   return res

// }



// min(1,-3)



// Так же можно написать функцию  в одну строку, 'стрелочная функция'


// const min = (a, b) => Math.pow(a, b);



// console.log(min(9,2))


// function splitArr(mylti) {
  
//   const [a, b] = mylti.split(' ');
  

//   return a * b;



// }


// console.log(splitArr('10 2'))


// function logItems(items) {
  
//   items.forEach((value, idx) => {
    
//     console.log(`${idx + 1} - ${value}`)

//   });

// }

// logItems(['den','petya','kolya'])


// 

// const users = [
//   { name: 'Den', age: 32 },
  
//   { name: 'Vasya', age: 38 },
   
//   { name: 'Petya', age: 40 }

// ];


// for (const user of users) {
  
//   console.log(`${user.name} - ${user.age}`)

// }



// const person = {

//   name: 'Den',

//   lastname: 'Hutin',

//   age: 32,

//   coyntry: 'Ukranian',

//   city: 'Zp'
// }


// const userName = ['name'];

// console.log(person[userName])



// console.log(person)

// console.log(person.name);

// console.log(person.lastname);


// console.log(person.age)


// Краткая запись свойств


// const userName = 'Den';

// const lastname = 'Hutin'




// const person = {

//   userName,
//   lastname

// }


// console.log(person)


// Вычеслямые свойства


// const userName = 'Den';

// const lastName = 'Hutin'



// const person = {

// [userName]:lastName,

// }


// console.log(userName)


// Ссылочный тип {} === {}

// const a = { a: 1,y:2 };

// const b = a;



// console.log(a === b);


// a.hello = 100;

// console.log(a)

// b.hello = 150;

// console.log(b)




//Массивы и функции это обьекты




// const arr = [15, 40, 70];

// arr.Hello = "Hello"
// console.log(arr)



// const fn = function () {
  
//   console.log('Hello Den');



// };

// fn.hello = ':)';

// console.dir(fn.hello)


// const a = [1, 2, 4, 7];

// a.push(10, 40);


// console.log(a)


// Методы объекта

// const playlist = {

//   name: 'My super play list',
  
//   rating: 4.7,

  
 
//   tracks: ['track-1', 'track-2', 'track-3'],

//     trackCount: 3,
  

//   changeName(newName) {
    
//     this.name = newName;
  
//   },


//   updateRating(newRating) {
    
//     this.rating = newRating;

//   },


//   addTrack(newTrack) {
    
//     this.tracks.push(newTrack);

   
    // this.trackCount = this.tracks.length;

 // },



//метод для добавления нового элемента в массив обьекта
//   getCountTrack() {
    
//     return this.tracks.length;

//   }
// }

// playlist.changeName('New track');



// playlist.updateRating(7)


// playlist.addTrack('New sound');


// console.log(playlist.getCountTrack());



// playlist.addTrack('New track 2021')

// console.log(playlist.getCountTrack());


// console.log(playlist);





//Перебор for...in и Object.keys|keys|values|enteries







// const countTestimonials = {

//   good: 12,
  
//   bad:8

// }


//keys массив ключей

// const keys = Object.keys(countTestimonials);


// console.log(keys)


// for (const key of keys) {
  
//   console.log(countTestimonials[key])

// }


// values массив значений

// const values = Object.values(countTestimonials);


// console.log(values)


// let totalVelue = 0;

// for (const value of values) {
  
//   console.log(value);



//   totalVelue += value;


//   console.log(totalVelue)

// }


// 


// const persons = [

//   { name: 'Vasya', age: 32, salary: 1500,online:false },

//     {name:'Petya',age:36,salary:1700,online:true},

//      {name:'Misha',age:42,salary:1900,online:true},

// ];



// console.table(persons);

//Ищем пользователя по имени

// const searchPersonToName = function (allName, fliendName) {
  

//   for (const personName of allName) {
    
//     console.log(personName.name)


//     if (personName.name === fliendName) {
      
//       return 'Found';
//     }

//   }

//   return 'Do not found!'

// }


// console.log(searchPersonToName(persons,'Vsya'))




//Ищем пользователя online


// const searchOnlinePerson = function (allPerson) {
  
//   const onlinePerson = [];
//   for (const person of allPerson) {
    
   
 
//     if (person.online) {
      
//       onlinePerson.push(person)
//    }
    

//   }
//   return onlinePerson;
// }

// console.log(searchOnlinePerson(persons))

//Ищем пользователя offline



// const searchPersonOffline = function (allPerson) {
  

//   const offlinePerson = [];


//   for (const person of allPerson) { 

    


//     if (!person.online) {
      
//       offlinePerson.push(person)

//     }
 
//   }
//   return offlinePerson
// }

// console.log(searchPersonOffline(persons))


// const statusPerson = function (allPerson) {
  
//   const status = {

//     online:[],

//     offline: []
//   }

//   for (const person of allPerson) {
    
//     if (person.online) {
      
//       status.online.push(person);

//     }

//       status.offline.push(person);

//   }
// return status
// }


// console.log(statusPerson(persons))



// const numbers = [0,40,25,...[1, 2, 3, 4],54,70,50];

// console.log(numbers)



// const person = {

//   name: 'Jack',

//   age: 28,
  
//   country: 'Las Wegas'


// }


// const keys = Object.keys(person);

// const arrValues = [];

// for (const key of keys) {
  
//   arrValues.push(key);


//   console.log(arrValues)
  
 
// }





// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];





// function getAllValues(propName) {

//   const result = [];


//   for (const product of products) {
    
//     if (product.hasOwnProperty(propName)) {
      
//       result.push(product[propName]);

//       console.log(result);
//     }
//   }
  
// return []

// }


// getAllValues('quantity')

//Вщзвращаем значения по ключю массива

// const persons = [

//   { name: 'Den', surname: 'Hutin', age: 32 },
//   { name: 'Vasya', surname: 'Pupkin', age: 36 },
//   { name: 'Petya', surname: 'Sidorov', age: 40 }
   
// ]
  


// function getAllValues(propName) {
  
//   const result = [];

//   for (const person of persons) {
    
//     if (person.hasOwnProperty(propName)) {
      
//       result.push(person[propName]);

//       console.log(result);

      
//     }

//   }
//   return result

// }



// getAllValues('age')


// const a = { name: 'Vasya', age: 32, country: { city: 'Zp' },z:10 };

// const b = { name: 'Petya', age: 36, country: { city: 'Kyiv' },z:8 };


// const c = {

//   ...a,
//  name:'Kolya',
//   ...b,

//  z:40
// }

// console.log(c)


// const a = { a: 25, b: 75, g: { name: 'Den' } };

// const b = { a: 75, b: 350, g: { name: 'Petya' } };


// const c = {

//   ...a,
 
 
 
//   ...b,
 
//    a: 45,

// }

// console.log(c)



//Дустркуризация


// const person = {

//   name: 'Den',
  
//   surname: 'Hutin',
  
//   age:32,

//   info: {

//     birthday: 1988,
    
//     mounth: 'november',

//     day: 28

//   }

// }



// const { name, surname: patronumic, age,country = 'Zp',info } = person;

// console.log(name)


// const { birthday, mounth, day } = info;

// console.log(birthday, mounth, day);



// const arrname = ['den', 'vasya', 'petya'];


// console.log(arrname.length - 1)


// const arr = [25, 40, 70];

// const newCopyArr = [...arr];

// console.log(newCopyArr)





// const cart = {

//   items: [],
  
//   getitems() {
    
//     return this.items

//   },
//   add(product) {


//     const newProduct = {

//       ...product,
//       quntity: 1
      
      

//     }
    
//     this.items.push(newProduct)
//   },

//   remove(productName) { 

//     const { items } = this

//     for (let i = 0; i < items.length; i += 1) {

//       const { name } = this.items[i];

//       if (productName === name) {
        
//         console.log(`Нашли такой продукт ${productName}`)

//         console.log('Индекс: ', i)


//         items.splice(i, 1);
        
        

//         return productName

//       }

     
   
//      }

//   },
  
//   clear() { 

//     this.items = [];

//     return this.items

//   },

//   countTotalPrice() {

//     const { items } = this;

//     let total = 0;

    

   

//     for (const  { price } of items) {
      
    
     
//       total += price;

//     }

//    return total
//    },

//   increaseQuantity() { },

//   decreaseQuantity() { }

// };


// console.table(cart.getitems())

// cart.add({ name:'apple', price:50 });

// cart.add({ name: 'orange', price: 70 })
// cart.add({ name:'lemon', price: 100 })
// cart.add({ name: 'strawberry', price: 120 })
// cart.add({ name: 'grape', price: 75 })





// console.table(cart.getitems())


// console.log('Total: ', cart.countTotalPrice())


// cart.remove('apple');


// console.table(cart.getitems())


// cart.clear();


// console.log(cart.clear())

// console.log(cart.getitems())

// cart.countTotalPrice();




// const usr = {

//   info: [
//     { name: 'Den' },
    
//     { name: 'Vasya' },

//     { name: 'Petya' },
    
//     {name:'Kolya'},
   
//   ],
 

  


//   getUserValue() {
    
//     const value = []

//     for (const user of this.info) {
      

//       value.push(user);

//     }
//     return value

//   },
  
//   addNewName(newName) {
    
   

 
   
//     for (const name of this.info) {
     

//       if (name.name === newName) {
         
//         return `this is ${newName} occupied by another user`;
      
//       }


//           return 'Welcome: ',this.info.push(newName) 
//    }

    


//   }

// }




// console.log(usr.addNewName())

// console.log(usr.getUserValue())

const names = ['Vasya', 'Petya', 'Kolya'];

// const addNewName = function addName(newName) {
  
//   for (const name of names) {
    
//     if (name === newName) {
      
   
//      return `This ${newName} is taken by another user.`

//     }

  

//   }
//   return `Welcome ${newName}`

// }

// console.log(addNewName('Denis'))


// const removeName = function (userName) {
  
//   const indexName = names.indexOf(userName);

//   for (const name of names) {
    
//     if (name === userName) {
      
//       return `There is no user with this ${userName}`


//     }

//   }

//   return names.splice(1,indexName) + 'User delete'

// }



// console.log(removeName('Petya'))



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
 
//   getPotions() {
//     return this.potions;
//   },

  // метод на добавление нового имени
//   addPotion(newPotion) {
    
//     const {potions} = this;
    
//     for(const potion of potions){
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
// }
//     return potions.push(newPotion);
//   },

  // метод удаления имени
  // removePotion(potionName) {
   
  //   const {potions} = this;
    
  //   for(const potion of potions){
    
  //     if(potion.name === potionName){
        
  //     potions.splice(potions.indexOf(potion),1)
      
  //     return potion
  //     }
  //   }

  

    
  // },
  // метод обновления имени

  // updatePotionName(oldName, newName) {
   
  //   const {potions} = this;
    
  //   for(const potion of potions){
    
  //    if (potion.name === oldName){
     
  //        potion.name = newName;
       
  //      return;
  //    }
    
  //   }
    

  //   return `Potion ${oldName} is not in inventory! `;
   
  // },
  // Change code above this line
//};



const SicoraShop = {

  products: [

  { name: 'Satcom T-505', price: 350 },

  { name: 'Hopestar H-11', price: 470 },

  { name: 'Hopestar H-45 Party', price: 650 },
  
  {name:'Hopestar H-01',price:1000}, 


  ],

  add(newProduct) {
    
    const { products } = this;

    for (const product of products) {
      
      if (product.name === newProduct) {
        
         return `Such a ${newProduct} is already in the assortment`
        
      }
     
    
    }
   
   return products.push(newProduct.name) + `Product ${newProduct} added`

   
  },


  removeProduct(productName) {
    
    const { products } = this;

    for (const product of products) {
      
      if (product.name === productName) {
        
        products.splice(products.indexOf(product), 1);

       return products


      }
      
    }

   return `This  ${productName}  is not in the range`
  },



  updateProductName(oldName, newName) { 

    const { products } = this;

    for (const product of products) { 

      if (product.name === oldName) { 

        product.name = newName;

        return `New name ${newName}  update`

      }


    }
   
    return `This ${oldName} is not on the list`;


  },


     countTotaPrice() {
    

    const { products } = this;


    let total = 0;
       
       
       for (const {  price  } of products) {
      
      total += price;

    }

   return total

  }

}



  // console.log(SicoraShop.add('Hopestar H-24'))


  // console.log(SicoraShop.removeProduct('Satcom T-505'))


  // console.log(SicoraShop.updateProductName('Satcom T-505'))


  // console.log('Total: ',SicoraShop.countTotaPrice())




// Интеравалы

// const call = function () {
  

//   console.log('Случай через 3 секунды');

// }

// console.log('перед таймаутом');


// setTimeout(call, 3000);

// console.log('Конец таймаута');

//Работа с backend

// const onReques = function (response) {
  
//   console.log('вызов функции onReques после успешного ответа бекенда')

// console.log(response)
// }


// fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(res => res.json())

//   .then(onReques)

// Фильтр


// const filter = function (array, test) {
  
//   const filterArr = [];

//   for (const arr of array) {
    
//     console.log(arr)
//     console.log(test(arr))

//     const passed = test(arr);

//     if (passed) {
      
//       filterArr.push(arr)

//     }

//   }
//   return filterArr;
// };


// const call = function (value) {
  
//   return value >= 3;
// }


// const r1 = filter([1,23,7,46,7,4,2,3],call);

// console.log(r1)

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (value) {
  

//   return value <= 4;

// })

// console.log(r2)



// const fruits = [

//   { name: 'apple', quantity: 150, isFresh: true },
//   { name: 'gpapes', quantity: 220, isFresh: false },
//   { name: 'orange', quantity: 120, isFresh: true },
   
// ];


// const fruitsQuntity = function (fruit) {
  
//   return fruit.quantity >= 100;


// }

// const res = filter(fruits, fruitsQuntity);

// console.log(res)



//Замыкание


// const makeDish = function (sheffName, dish) {
  
//   console.log(`${sheffName}  готовит  ${dish}`)
// }



// makeDish('Денис', 'солянку')


// const funName = function (name) {
  
//   const num = 12;
//   const message = 'Hello';
//   const allName = function (surname) {
//     console.log(num)
//     console.log(message)
//    console.log(`Name: ${name} Surname:  ${surname}`)

//   }

//   return allName;
// }


// const den = funName('Den');

// console.dir(den)

// den('Hutin')



// Фильтрация одинаковых элементов массива свойства обьекта

const persons = [

  {
   
    names: ['Vasya', 'Petya'],

    age: [25, 40],
    friends: ["Goldie Gentry", "Briana Decker", "Adrian Cross"],

  },


  {

    names: ['Vasya', 'Petya'],
    
    age: [26, 43],
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes","Briana Decker","Goldie Gentry"],
  }
  


];

const allFriends = persons.reduce((acc, per) => [...acc,...per.friends], []);
console.log(allFriends)


// Если с ключем stats есть увеличить его значение на 1

// Если нет такого свойства  с таким ключем что в stats, сделать запись 1

// Обычный код
// const allStats = allFriends.reduce(
//   (acc, stats) => {
   
//     return{
    
//        ...acc,
    
//     [stats]: acc[stats] ? acc[stats] + 1 : 1,

//     }
   

//   },
//   {}
// );

// console.log(allStats)
  
//
  //Добавление статуса через условную  конструкцию
  // if (acc[stats]) { 

  //   acc[stats] += 1
  //  return acc

  // }

  // acc[stats] = 1;

  // return acc



  









// const allName = [...persons].sort((a, b) => a.friends.length - b.friends.length)

// .map((person) => person.names)


// console.log(allName)


// const allAge = persons.flatMap(person => person.age);

// const arrAge = allAge.filter((age, index, array)=> array.indexOf(age) === index )

// console.log(arrAge)


// chaning цепочка методов 

// const sorted = [...users].filter(user => user.rating >= rat)
//   .map(user => user.name)
//   .sort((a,b)=> a.localeCompare(b))

//   console.log(sorted)


// const numbers = [21, 2, 4, 7, 89, 5, 6];


// const sorted = numbers.filter(num => num > 2)
//   .map(num => num * 2)
//   .sort((a, b) => a - b);

//   console.log(sorted)



const player = [


  { id: 1224, name: 'Jack', timePlayed: 120, online: true },
  { id: 1424, name: 'Maick', timePlayed: 142, online: true },
  { id: 1474, name: 'Fredy', timePlayed: 147, online: false },
  { id: 1224, name: 'Mishel', timePlayed: 210, online: false }
  


];


// const totalTimePlayers = player.reduce((totalTime,{ timePlayed }) => totalTime + timePlayed,0)
  


// console.log(totalTimePlayers)



const cart = [


  { label: 'abble', price: 120, quantity: 2 },
  { label: 'grap', price: 155, quantity: 3 },
  { label: 'orange', price: 171, quantity: 4 }
    
  


];


const user = {

  name: 'Bob',


  getName() {
    

    console.log(this)
  },

};

const get = user.getName()
  
get();

