//A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
//The robot can only move either down or right at any point in time.
//The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
//How many possible unique paths are there?
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var map = [];
    for (var i = 0; i < m; i++) {
        map[i] = [];
        for (var j = 0; j < n; j++) {
            if (i == 0 || j == 0) {
                map[i][j] = 1;
            } else {
                map[i][j] = map[i-1][j] + map[i][j-1];
            }
        }
    }
    return map[m-1][n-1];
};
