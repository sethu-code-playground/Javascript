/* Loops execute a line or block of code again and again until the condition evaluates to false

Syntax:
while(condition){
    //do something
}
Always increment the counter to prevent the loop from running infinitiely
*/
var arr = [];
var count = 1;
function fizzbuzz(){
    while(count <= 100){
        if(count % 3 === 0 && count % 5 === 0){
        arr.push("Fizzbuzz");
    }else if (count % 5 === 0){
        arr.push("Buzz");
    }else if (count % 3 == 0){
        arr.push("Fizz");
    }else{
        arr.push(count);
    }
    console.log(arr);
    count++;        
    }
}

//99 bottles of beer on the wall, 99 bottles of beer.
//Take one down and pass it around, 98 bottles of beer on the wall.
//98 bottles of beer on the wall, 98 bottles of beer.
//Take one down and pass it around, 97 bottles of beer on the wall.
//No more bottles of beer on the wall, no more bottles of beer.
//Go to the store and buy some more, 99 bottles of beer on the wall.

function beer(){
    var i = 99;
    var bottleword = " bottles";
    let statement = "Take 1 down and pass it around, ";
    while (i >= 0){
        if(i > 1){
            console.log(i + bottleword + " of beer on the wall, " + i + bottleword + " of beer. " + statement + (i-1) + bottleword + " of beer on the wall");
        }else if(i === 1){
            bottleword = " bottle";
            console.log(i + bottleword + " of beer on the wall, " + i + bottleword + " of beer. " + statement + (i-1) + bottleword + " of beer on the wall");
        } else {
            statement = "Go to the store and buy some more, ";
            console.log("No more" + bottleword + " of beer on the wall, No more" + bottleword + " of beer. " + statement + "99" + bottleword + " of beer on the wall");
        }
        
        // console.log(statement);
        
        // console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. " + (i-1) + " bottles of beer on the wall.");
        i--;
    }
}

/*
Solution to the 99 Bottles Challenge
This is one of the ways you could have solved the challenge using a while loop. There are many others, as long as you achieve the desired outcome -printing the lyrics to the 99 bottles of beer song- then you are successful! If you've come up with a fancy solution or something different, be sure to share it in the Q&A section for other students to learn from!

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
If you want to challenge yourself further, try changing the code to make the english more grammatically correct. So the final output should say "1 bottle of beer on the wall" when numberOfBottles is equal to 1 rather than "1 bottles of beer on the wall" and when numberOfBottles is equal to 0, you can make the output "No more bottles of beer on the wall" instead of 0 bottles of beer on the wall".
*/