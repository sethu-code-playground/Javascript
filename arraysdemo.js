/*
Array is a collection of items that can be stored together into a same variable
Syntax => var arrayName = [item1, item2,..., item n];
Syntax to retrieve data/value from an array => var value = arrayName[itemIndex];
The index of an array always starts from 0
To get the number of items in an array(arraylength) use "arrayName.length;"
*/

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guestList);
console.log(guestList.length);
console.log(guestList[0]);
console.log(guestList[4]);
console.log(guestList.includes("Ram"));

// var name = prompt("What's your name?");
// if(guestList.includes(name)){
//     alert("Welcome!");
//     console.log("Welcome!");
// }else{
//     alert("Maybe next time");
//     console.log("Maybe next time");
// }

//Fizzbuzz Problem
//array.push(item) will always push the item to the end of the array
//array.pop; will remove the last element from the array;

var arr = [];
var count = 1;

function fizzbuzz(){
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
