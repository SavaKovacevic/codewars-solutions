// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// SOLUTION
function accum(s) {
var result = "";
var prev = "";
  for(var i = 0; i < s.length; i++){
    var letterNumber = s[i].repeat(i);
    result = prev + s[i].toUpperCase() + letterNumber.toLowerCase() + "-";
    prev = result;
  }
  return result.substring(0, result.length - 1);
}