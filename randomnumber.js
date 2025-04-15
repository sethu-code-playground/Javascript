// Generates a random number between 0 and 0.999...(upto 16 decimal places) and it never reaches 1.
var n = Math.random();
n = n*6;
n = Math.floor(n) + 1; //==> this is called pseudo random number generator.
console.log(n);

//Love Calculator
var name1 = prompt("Enter the name of the first person");
var name2 = prompt("Enter the name of the second person");

var percentage = Math.random();
var love_percentage = Math.floor((percentage * 100) + 1);
alert("The Love percentage between " + name1 + " and " + name2 +  " is " + love_percentage + " %");