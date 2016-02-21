//Given a collection of distinct numbers, return all possible permutations.
var permute = function(nums) {
    res = [];
    _h(nums, 0, nums.length);
    return res;
};
var _h = function(arr, cur, length) {
    if(cur == length) {
        res.push(arr.slice());
        return;
    }
    for(var i = cur; i < length; i++) {
        swap(arr, cur, i);
        _h(arr, cur+1, length);
        swap(arr, cur, i);
    }
};
var swap = function(array, m, n) {
    var temp = array[m];
    array[m] = array[n];
    array[n] = temp;
};
