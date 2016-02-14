//Say you have an array for which the ith element is the price of a given stock on day i.
//If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock),
//design an algorithm to find the maximum profit.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1){
        return 0;
    }
    var max = 0;
    var low = prices[0];
    for(var i = 1; i < prices.length; i++){
        if(prices[i] > low){
            max = Math.max(max, (prices[i]-low));
        }else{
            low = prices[i];
        }
    }
    return max
};
