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


let products = ['Hoco', 'Jelico', 'Joyroom'];


let remProd = products.slice(1, 3);


console.log(remProd)