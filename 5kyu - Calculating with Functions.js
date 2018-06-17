// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// JavaScript:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Ruby:

// seven(times(five)) # must return 35
// four(plus(nine)) # must return 13
// eight(minus(three)) # must return 5
// six(divided_by(two)) # must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...

// SOLUTION
function zero(a) {if(a) {return a(0);} else{return 0;}}
function one(a) {if(a) {return a(1);} else{return 1;}}
function two(a) {if(a) {return a(2);} else{return 2;}}
function three(a) {if(a) {return a(3);} else{return 3;}}
function four(a) {if(a) {return a(4);} else{return 4;}}
function five(a) {if(a) {return a(5);} else{return 5;}}
function six(a) {if(a) {return a(6);} else{return 6;}}
function seven(a) {if(a) {return a(7);} else{return 7;}}
function eight(a) {if(a) {return a(8);} else{return 8;}}
function nine(a) {if(a) {return a(9);} else{return 9;}}

function plus(a) {return function(b){return b + a;}}
function minus(a) {return function(b){return b - a;}}
function times(a) {return function(b){return b * a;}}
function dividedBy(a) {return function(b){return b / a;}}