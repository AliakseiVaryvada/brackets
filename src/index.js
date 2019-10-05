const config1 = [
    ["(", ")"]
];
const config2 = [
    ["(", ")"],
    ["[", "]"]
];
const config3 = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"]
];
const config4 = [
    ["|", "|"]
];
const config5 = [
    ["(", ")"],
    ["|", "|"]
];
const config6 = [
    ["1", "2"],
    ["3", "4"],
    ["5", "6"],
    ["7", "7"],
    ["8", "8"]
];
const config7 = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["|", "|"]
];

function check(str, bracketsConfig) {
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
}
console.log(check("())(", config1));