// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. There are no traps in this format.

// To compare the results of the teams you are asked for giving three statistics; range, average and median.

// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

// Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

// Your task is to return a string giving these 3 values. For the example given above, the string result will be

// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

// of the form:

// "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"

// where hh, mm, ss are integers (represented by strings) with each 2 digits.

// Remarks:

// if a result in seconds is ab.xy... it will be given truncated as ab.

// if the given string is "" you will return ""

// SOLUTION
function stat(strg){
  if (strg === "") return "";
  
  var seconds = strg.split(',').map(val => {
    var tempValue = val.split('|');
    var toSeconds = Number(tempValue[0]) * 3600 + Number(tempValue[1]) * 60 + Number(tempValue[2]);
    return toSeconds;
  });
  var seconds = seconds.sort(function(a, b){return a-b});
  
  var range = Math.max.apply(null, seconds) - Math.min.apply(null, seconds);
  
  var sum = seconds.reduce((acc, num) => acc + num);
  var average = sum / seconds.length;
  
  if(seconds.length % 2 === 1){
     var median = seconds[Math.floor(seconds.length / 2)];
    } else {
      var median = (seconds[Math.floor((seconds.length - 1) / 2)] + seconds[Math.floor(seconds.length / 2)]) / 2;
    }
  
  var secondsToString = seconds.map(val => {
    return val.toString();
  });
  
  String.prototype.toTime = function(){
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+'|'+minutes+'|'+seconds;
  }
  
  return "Range: " + range.toString().toTime() + " Average: " + average.toString().toTime() + " Median: " + median.toString().toTime();
  
}