// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// #Example:

// s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(s1, s2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,

// output: number as a string

// SOLUTION
function mxdiflg(a1, a2) {
  var pos1 = Math.abs(Math.min.apply(null, a1.map(word => word.length)) - Math.max.apply(null, a2.map(word => word.length)));
  var pos2 = Math.abs(Math.max.apply(null, a1.map(word => word.length)) - Math.min.apply(null, a2.map(word => word.length)));
  return !a1.length || !a2.length ? -1 : pos1 > pos2 ? pos1 : pos2;
}