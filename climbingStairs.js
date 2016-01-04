//You are climbing a stair case. It takes n steps to reach to the top.
//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 0 || n == 1 || n == 2){
        return n;
    }
    var count = [1,2];
    for(var i = 2; i < n; i++){
        count[i] = count[i-1] + count[i-2];
    }
    return count[n-1];
};
