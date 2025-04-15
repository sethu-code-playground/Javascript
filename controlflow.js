//Love Calculator
var name1 = prompt("Enter the name of the first person");
var name2 = prompt("Enter the name of the second person");

var percentage = Math.random();
var love_percentage = Math.floor((percentage * 100) + 1);

if(love_percentage > 70){
    alert("The Love percentage between " + name1 + " and " + name2 +  " is " + love_percentage + " %. You love each other like Romeo and Juliet");
} else{
    alert("The Love percentage between " + name1 + " and " + name2 +  " is " + love_percentage + " %");
}

/* Comparatives
=== ==> strict equality
== ==> equality
!= ==> not equality
> ==> greater than
< ==> less than
>= ==> greater thanor equal to
<= ==> lesser than or equal to
*/

