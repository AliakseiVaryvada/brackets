module.exports = function check(str, bracketsConfig) {
    let count = 0;
    let i = 0;
    let promStr = "";
    let array = [];
    let stopSignal = 1;
    while ((stopSignal = 1)) {
        stopSignal = 0;
        bracketsConfig.forEach(function(element, index) {
            array = str.split(
                bracketsConfig[index][0] + bracketsConfig[index][1]
            );
        });
        if (array.length > 1) {
            count = count + 1;
            stopSignal = 1;
            promStr = array.join("");
        }
    }
    return promStr == "" ? true : false;
};