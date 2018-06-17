// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// SOLUTION
var uniqueInOrder=function(iterable){
  var array = [];
  for(var i = 0; i < iterable.length; i++){
    if(i === 0){
     array.push(iterable[i]);
    }
    if(array[array.length - 1] !== iterable[i]){
      array.push(iterable[i]);
    }
  }
  return array;
}