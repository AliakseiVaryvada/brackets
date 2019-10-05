module.exports = function check(str, bracketsConfig) {
    let array = [];
    let stopSignal = 1;
    while (stopSignal == 1) {
        stopSignal = 0;
        for (let i = 0; i < bracketsConfig.length; i++) {
            array = str.split(bracketsConfig[i][0] + bracketsConfig[i][1]);
            if (array.length > 1) {
                stopSignal = 1;
                str = array.join("");
            }
        }
    }
    return str == "" ? true : false;
};