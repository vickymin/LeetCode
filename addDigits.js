//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function(num) {
    while (num >= 10) {
        var sum = 0;
        while (num > 0) {
            sum += num % 10
            num = parseInt(num / 10)
        }
        num = sum
    }
    return num
};
