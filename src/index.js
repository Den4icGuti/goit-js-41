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

// console.log(filterNumber([200,478,78,321],1,26,300,200,321))