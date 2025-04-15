/*Creating a function syntax

function functionName(){
    //code
}

Calling a function
functionName();
*/

// function getMilk() {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buyMilk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
    
// }

// getMilk();

// function getMilk(bottles) {
//     var cost = 1.5 * bottles;
    
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buyMilk - bought " + bottles + " of milk");
//     console.log("Cost - " + cost);
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
    
// }

// getMilk(3);

// function getMilk(cost) {

//     var bottles = Math.floor(cost/1.5);
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buyMilk");
//     console.log("Bought "+ bottles + " for the cost of " + cost);
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
    
// }

// getMilk(10);


//  function getMilk(cost) {

//     var bottles = Math.floor(cost/1.5);
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buyMilk");
//     console.log("Bought "+ bottles + " for the cost of " + cost);
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");

//      return cost % 1.5;
    
// }

// var change = getMilk(7);
// console.log("The expected change is " + change);

function getMilk(bottles) {
    var cost = 1.5 * bottles;
    
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buyMilk - bought " + calcBottles(cost, 1.5) + " of milk");
    console.log("Cost - " + cost);
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    console.log("the change is " + calcChange(cost, 1.5));
    
}

function calcBottles(money, costperBottle){
    return Math.floor(money/costperBottle);
}

function calcChange(money, costperBottle){
    return money % costperBottle;
}

getMilk(10)
