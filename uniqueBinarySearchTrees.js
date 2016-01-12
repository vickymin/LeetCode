//Given n, how many structurally unique BST's (binary search trees) that store values 1...n?
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if(n == 1 || n == 2){
        return n;
    }
    var array = [];
    array[0] = 1;
    array[1] = 1;
    array[2] = 2;
    for(var i = 3; i <= n; i++){
        array[i] = 0;
        for(var j = 1; j <= i; j++){
          array[i] += array[i-j]*array[j-1];
        }
    }
    return array[n];
};
