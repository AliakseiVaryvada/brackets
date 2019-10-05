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
        console.log("in while");
        for (let i = 0; i < mass.length; i++) {
            console.log("in for");
            // перебираем массив символов
            openIndex = openBr.indexOf(mass[i]); // ищем открытую скобку (-1 не найдено)
            if (openIndex !== -1) {
                console.log("find open");
                console.log(openIndex);
                console.log(closeBr.indexOf(mass[i + 1]));
                if (openIndex == closeBr.indexOf(mass[i + 1])) {
                    console.log("find close!");
                    mass.splice(i, 2);
                }
                if (mass.length == 1) {
                    return false;
                }
            }
        }
        console.log("true");
        if (mass.length == 0) {
            return true;
        } else {
            return false;
        }
    }
};