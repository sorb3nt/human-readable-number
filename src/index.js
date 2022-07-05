module.exports = function toReadable (number) {
    let rest;
    let result = "";

    let arr1 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let arr10 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) return "zero";

    rest = (number % 100).toString();

    if (rest.length === 1) {
        result = result + arr1[rest];
    } else if (rest.length === 2 && rest < 20) {
        result = result + arr1[rest];
    } else if (rest.length === 2 && rest >= 20) {
        result = result + arr10[rest[0]] + " " + arr1[rest[1]];
    }

    rest = (number % 1000).toString();

    if (rest.length === 3) {
        result = `${arr1[rest[0]]} hundred ${result}`;
    }

    return result.trim();
}
