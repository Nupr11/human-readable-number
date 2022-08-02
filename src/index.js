module.exports = function toReadable(number) {
    var lessTens = new Array(
        " ",
        " one",
        " two",
        " three",
        " four",
        " five",
        " six",
        " seven",
        " eight",
        " nine",
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen"
    );
    var tens = new Array(
        " ",
        " ",
        " twenty",
        " thirty",
        " forty",
        " fifty",
        " sixty",
        " seventy",
        " eighty",
        " ninety"
    );
    var hund = " hundred";
    var numString = number.toString();
    var output = " ";

    if (number == 0) {
        return "zero";
    } else if (number < 20) {
        output = lessTens[number];
        output = output.trim();
        return output;
    } else if (number < 100 && number >= 20) {
        output = tens[parseInt(numString.charAt(0))];
        output += lessTens[parseInt(numString.charAt(1))];
        output = output.trim();
        return output;
    } else if (number.lehgth != 3 && numString.slice(1) >= 20) {
        output = lessTens[parseInt(numString.charAt(0))] + hund;
        output += tens[parseInt(numString.charAt(1))];
        output += lessTens[parseInt(numString.charAt(2))];
        output = output.trim();
        return output;
    } else if (number.lehgth != 3 && numString.slice(1) < 20) {
        output = lessTens[parseInt(numString.charAt(0))] + hund;
        output += lessTens[parseInt(numString.slice(1))];
        output = output.trim();
        return output;
    }
};
