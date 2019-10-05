module.exports = function check(str, bracketsConfig) {
    let mass = [...str]; // разбиваем строку в массив
    let stack = []; //объявляем пустой стек
    let closeIndex = 0; // номер открытой скобки
    let openIndex = 0; // номер закрытой
    let openBr = []; // список открывающих
    let closeBr = []; // список закрывающих
    bracketsConfig.forEach(element => {
        //определяем какая открывающая, а какая закрывающая скобка
        openBr.push(element[0]);
        closeBr.push(element[1]);
    });
    for (i = 0; i < mass.length; i++) {
        // перебираем массив символов
        openIndex = openBr.indexOf(mass[i]); // ищем открытую скобку (-1 не найдено)
        if (openIndex !== -1) {
            //нашли
            stack.push(openIndex); // кладём в стек найденую открытую скобку
        }
        closeIndex = close.indexOf(mass[i]); // ищем закрытую скобку (-1 не найдено)
        if (closeIndex !== -1) {
            // нашли
            openIndex = stack.pop(); //вытягиваем последнюю открывающую из стека
            if (closeIndex !== openIndex) {
                //если они не совпадают
                return false; //вернуть false
            }
        }
        if (stack.length !== 0) {
            //проверяем пустоту стека после перебора
            return false;
        }

        return true;
    }
};