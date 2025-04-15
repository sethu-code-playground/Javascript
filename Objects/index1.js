//Javascript Objects --> are a collection of data of different datatypes.

var bellBoy1 = {
    name: "Jimmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"]
}

//bellBoy1 is object name. "name", "age", "hasWorkPermit", "languages" are different properties of the object

alert("Hello my name is " + bellBoy1.name  + " and I'm " + bellBoy1.age + " years old."); //properties of an object can be accessed using . 

var bellBoy2 = {
    name: "Tommy",
    age: 21,
    hasWorkPermit: true,
    languages: ["Tamil", "English"]
}

var houseKeeper1 = {
    name: "Brulee",
    age: 18,
    hasExperience: true,
    tasks: ["cooking", "cleaning"]
}

console.log("Hello I'm " + houseKeeper1.name + " and I'm " + houseKeeper1.age + " years old.");

/* Creating objects in the above way can be tedious if there are many objects to be created. This can be solved by using a Constructor function as below.
The first letter in the name of the constructor should be Capital.

Syntax 
function ConstructorName(input1, input2, input3...){
    this.input1 = input1;
    this.input2 = input2;
    //do something
}*/

function HouseKeeper(name, age, hasExperience, tasks){
    this.name = name;
    this.age = age;
    this.hasExperience = hasExperience;
    this.tasks = tasks;
}

/*We can initialize an object using the constructor by passing values to the paramaters of the constructor
var objectName = new ConstructorName(value1, value2, value3,...);*/
var houseKeeper2 = new HouseKeeper("Mikasa", 20, false, ["scouting", "titanslaying"]);
console.log("Hello I'm " + houseKeeper2.name + " and I'm " + houseKeeper2.age + " years old.");

/*A object can also contain methods inside it. The Object method is defined with a method name and an anonymous function to do something
The methods inside an object can be called using --> objectName.objectMethodName() */
var bellBoy1 = {
    name: "Jimmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"],
    moveSuitcase: function () {
        var response = prompt("May I pickup your suitcase?");
        if(response === "yes"){
            pickupSuitcase();
            move();
        }else{
            alert("Thank you!");
        }
        
    }
}

function BellBoy(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function () {
        var response = prompt("May I pickup your suitcase?");
        if(response === "yes"){
            pickupSuitcase();
            move();
        }else{
            alert("Thank you!");
        }
    }
}

function HouseKeeperWithMethod(name, age, hasExperience, tasks){
    this.name = name;
    this.age = age;
    this.hasExperience = hasExperience;
    this.tasks = tasks;
    this.performTasks = function () {
        if(hasExperience){
            alert("I have perfomed " + tasks);
        }else{
            alert("I can't perform tasks");
        }
        
    }
}

var houseKeeper3 = new HouseKeeperWithMethod("Prema", 34, true, ["cooking", "cleaning"]);
var houseKeeper4 = new HouseKeeperWithMethod("Soma", 15, false, ["learning", "playing"]);
houseKeeper3.performTasks();
houseKeeper4.performTasks();




