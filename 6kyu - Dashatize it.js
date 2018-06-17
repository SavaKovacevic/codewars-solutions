// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// SOLUTION
function dashatize(num) {
  var tempArr = num.toString().split('').map(val => {
    if(Number(val) % 2 === 1) return '-' + val + '-'
    else return val;
  });
  
  var result = tempArr.join('').replace(/--/g, '-');


  if(result.charAt(0) === '-'){
    result = result.slice(1);
  }
  if(result.charAt(result.length - 1) === '-'){
    result = result.slice(0, -1);
  }

  
  return result;
};