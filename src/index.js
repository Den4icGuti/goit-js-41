// Занятие 2 цыклы, условные операторы,массывы module 1.2

function checkWords(message) {

    // создаем масси запрещенных слов
   
    const words = ['spam', 'sale', 'virus'];
    
    // конвертируем слова в нижний регистр

    const str = message.toLowerCase();

    //задаем изначальное значение для проверки запрещенных слов в массиве

    let hesSpam = false;

    // перебираем элементы массива через цикл
     

    for (let i = 0; i <= words.length; i += 1) {
        
        // Присваиваем перебранные элементы массива в новую переменную

        const word = words[i];

        //Проверяем на запрещенные слова  в массиве

        if (str.includes(word)) {
            
            hesSpam = true;

            break;
        }


    }

    console.log(hesSpam);

    return hesSpam;

}


checkWords('spam');


