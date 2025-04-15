/*DOM ==> Document Object Model, catalouges the website into individual objects that we can select and
manipulate. The browser converts the HTML of the code into DOM when it loads the webpage. It turns each
of the HTML elements and their associated data into a tree structure. Everything inside the HTML file is
contained in an object called document.

Objects inside the DOM will have properties and methods. Properties define aboout the object and the method
is something that can be done with the object. We can access the properties and methods of the object in a
DOM using . notation. The properties can be both retrived from the element(get) and manipulation of the
property(set). Common properties include innerHTML,style,firstChild,lastElementChild etc., Methods of a DOM
element can be accessed by calling it. Methods will always have () at the end. 
Eg:document.querySelector("input").click(); Some common methods include click(), setAttribute(), appendChild()etc.,

*/

console.log(document); 
console.log(document.firstElementChild);//will print everything inside html tag
console.log(document.firstElementChild.firstElementChild); // prints everything inside 1st child ==> head tag in this case
console.log(document.firstElementChild.lastElementChild); //prints the last child ==> body tag in this case
console.log(document.firstElementChild.lastElementChild.firstElementChild); // prints h1 in this case

var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good Bye!"; //will change content inside h1 from hello to good bye
heading.style.color = "red"; // will change text color to red

document.querySelector("input").click(); //will selct 1st input tag and clicks it

//Challenge
var lastList = document.querySelector("ul").lastElementChild;
lastList.innerHTML = "Third - manipulated by DOM"
