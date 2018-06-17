// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// SOLUTION
function findShort(s){
  var wordLength = s.split(' ').map(word => {
    return word.length;
  });  
  return Math.min.apply(null, wordLength);
}