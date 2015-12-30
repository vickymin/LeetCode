/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var q = partition(nums, 0, nums.length-1);
    while(q != nums.length - k){
      if(q < nums.length - k){
        q = partition(nums, q + 1, nums.length-1);
      }else{
        q = partition(nums, 0, q - 1);
      }
    }
    return nums[q];
}

var partition = function(array, p, r){
  var q = p;
  if(p<r){
    for(var j = p; j < r; j++){
      if(array[j] <= array[r]){
        swap(array, j, q);
        q++;
      }
    }
    swap(array, r, q);
  }
  return q;
};

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};
//console.log(partition([12,3443,643,100,23,50],0,5));
//console.log(findKthLargest([12,3443,643,100,23,50],5));
console.log(findKthLargest([3,1,2,4],2));
