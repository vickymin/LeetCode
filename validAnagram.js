//Given two strings s and t, write a function to determine if t is an anagram of s.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
     var ss = s.split("").sort().join("");
     var tt = t.split("").sort().join("");
     return ss === tt;
 };
