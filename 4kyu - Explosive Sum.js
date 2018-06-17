// How many ways can you make the sum of a number?
// From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#

// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

// 4
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1
// Examples
// Basic
// sum(1) // 1
// sum(2) // 2  -> 1+1 , 2
// sum(3) // 3 -> 1+1+1, 1+2, 3
// sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

// sum(10) // 42
// Explosive
// sum(50) // 204226
// sum(80) // 15796476
// sum(100) // 190569292

// SOLUTION
function sum (number) {
    if(number < 0) return 0;

    var temp = [];
    for (var i = 1; i <= number; i++)
      temp[i] = i;

    var res = [];
    var test = [];
    for (var i = 0; i <= number; i++)
		if(i === 0){
		res[i] = 1;
		test[i] = i;
	} else {
      res[i] = test[i] = 0;
    }

    for (var i = 0; i <= number; i++) {
      for (var j = 0; j <= number; j++)
        for (var k = 0; j + k <= number; k += temp[i])
          test[j + k] += res[j];
      for (var j = 0; j <= number; j++)
        res[j] = test[j], test[j] = 0;
    }
    return res[number];
  }