//Given a collection of distinct numbers, return all possible permutations.
public class Solution {
    private ArrayList res = new ArrayList<int[]>();
    public List<List<Integer>> permute(int[] nums) {
        _h(nums, 0, nums.length);
        return res;
    }
    private void _h(int[] arr, int cur, int length) {
        if(cur == length) {
            res.add(arr.clone());
            return;
        }
        for(int i = cur; i < length; i++) {
            swap(arr, cur, i);
            _h(arr, cur+1, length);
            swap(arr, cur, i);
        }
    }
    private void swap(int[] arr, int m, int n) {
        int temp = arr[m];
        arr[m] = arr[n];
        arr[n] = temp;
    }
}
