//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

public class Solution {
    private List<String> res = new ArrayList<String>();
    public List<String> generateParenthesis(int n) {
        _h("", n, n);
        return res;
    }
    private void _h(String s, int x, int y) {
        if (x == 0 && y == 0) {
            res.add(s);
        }
        if (x > 0 && x-1 <= y) {
            _h(s+"(", x-1, y);
        }
        if (y > 0 && x <= y-1) {
            _h(s+")", x, y-1);
        }
    }
}
