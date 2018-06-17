// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// SOLUTION
function sortArray(array) {
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      newArray.push(array[i]);
    }
  }
  newArray.sort(function(a, b){return a-b});
  for(var i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      newArray.splice(i, 0, array[i]);
    }
  }
  return newArray;
}