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
    console.log("open" + openBr);
    console.log("close" + closeBr);
    while (mass.length > 0) {
        for (i = 0; i < mass.length; i++) {
            // перебираем массив символов
            openIndex = openBr.indexOf(mass[i]); // ищем открытую скобку (-1 не найдено)
            if (openIndex !== -1) {
                if (mass[i + 1] == close.indexOf(mass[i])) {
                    mass.splice(i, 2);
                }
                if (mass.length == 1) {
                    return false;
                }
            }
        }
        console.log("true");
        return true;
    }
};