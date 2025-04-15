/*Syntax
for(initialization; condition; increment/decrement){
    //Do something
}

Use while loop when we dont know exactly how much iterations the loop should run. Use for loop when the iterations of the loop is known
*/

var arr = [];

function fizzbuzzz(){
    for(var count = 1; count <= 100; count++){
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
    }
}