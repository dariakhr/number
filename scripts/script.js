var number = prompt("Write a number");
 if (!isNaN(number) && number > 0) {
  var second_number = prompt("Write second number");
   if (!isNaN(second_number) || (second_number > 0) || second_number < number) {
    var result = number % second_number;
      if ( result == 0 ) {
       alert("Числа делятся без остачи.");
     }  if ( result >= 1 ) {
       alert("Числа делаются с остачей " + result);
     }
 }
 } else  {
   alert("Its not a number");
 }
