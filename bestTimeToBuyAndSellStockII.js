//Say you have an array for which the ith element is the price of a given stock on day i
//Design an algorithm to find the maximum profit
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length;
    var max = 0;
    for(var i = 0; i < len; i++){
        var temp = prices[i];
        var last = prices[i-1]
        if(temp > last){
            max = max + (temp - last);
        }
    }
    return max;
};
