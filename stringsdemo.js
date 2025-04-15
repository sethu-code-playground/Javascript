// alert("hello" + " " + "world");

// var name = "Sethu";
// var message = "Hey there!";

// //string concatenation
// alert(name + " " + message);

// name.length;

// //string length and slice
// var counter = prompt("Enter your tweet")
// var count = counter.length;
// var newCounter = counter.slice(0,180)
// alert(newCounter + "\n you have entered " + newCounter.length + " characters. You have " + (180 - count) +" characters remaining.")

// alert(prompt("Enter your tweet:").slice(0,180));

// var newName = "Robert Downey Jr.";
// newName.slice(0,6);

//toUppercase
// var hero = "thor";
// hero = hero.toUpperCase();
// hero = hero.toLowerCase();

var name = prompt("What's your name?");
name = name.toUpperCase();
length = name.length;
name1 = name.slice(0,1);
name = name.toLowerCase();
name2 = name.slice(1,length);
alert("Hello there, " + name1 + name2);



