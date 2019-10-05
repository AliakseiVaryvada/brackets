module.exports = function check(str, bracketsConfig) {
    let mass = [...str]; // разбиваем строку в массив
    let mass1 = mass;
    let stack = []; //объявляем пустой стек
    let closeIndex = 0; // номер открытой скобки
    let openIndex = 0; // номер закрытой
    let openBr = []; // список открывающих
    let closeBr = []; // список закрывающих
    let n = [];
    bracketsConfig.forEach(element => {
        //определяем какая открывающая, а какая закрывающая скобка
        openBr.push(element[0]);
        closeBr.push(element[1]);
    });
    console.log("open" + openBr);
    console.log("close" + closeBr);
    for (i = 0; i < mass.length; i++) {
        // перебираем массив символов
        openIndex = openBr.indexOf(mass[i]); // ищем открытую скобку (-1 не найдено)
        if (openIndex !== -1) {
            console.log("FIND OPEN");
            //нашли
            stack.push(openIndex); // кладём в стек найденую открытую скобку
            n.push(i);
        }
        closeIndex = closeBr.indexOf(mass[i]); // ищем закрытую скобку (-1 не найдено)
        if (closeIndex !== -1) {
            // нашли
            console.log("FIND CLOSE");
            openIndex = stack.pop(); //вытягиваем последнюю открывающую из стека
            if (closeIndex !== openIndex) {
                //если они не совпадают
                console.log("false open != close");
                return false; //вернуть false
            } else {
                mass1.splice(i, 1);
                let m = n.pop();
                mass1.splice(m, 1);
            }
        }
    }

    console.log(mass1);
    if (stack.length !== 0) {
        //проверяем пустоту стека после перебора
        console.log("false disbalanse");
        return false;
    }
    console.log("true");
    return true;
};