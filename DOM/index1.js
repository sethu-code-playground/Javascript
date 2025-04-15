//classList ==> gets the class contents of a specified element.
var list = document.querySelector("button").classList;
// console.log(list);

//add new css class invisible to the element
document.querySelector("button").classList.add("invisible"); 
//removes new css class invisible to the element
document.querySelector("button").classList.remove("invisible");
//toggle ==> if the class specified is already applied remove it else add it.
document.querySelector("button").classList.toggle("invisible");

//Challenge
document.querySelector("#title").classList.toggle("huge");

//innerHTML => gives what is in between the html element tags.We can get and set even html to elements using innerHTML
var title = document.querySelector("#title");
title.innerHTML = "<em>Hola!<em>"; //gets the text Hello between h1 tags and converts into Hola!

//textContent ==> gets only the text from the specified element
var subtitle = document.querySelector("#heading");
subtitle.textContent = "Sawadeeka!";

//attributes => returns list of all the attributes of the specified element
var attributesList = document.querySelector("a").attributes;
console.log(attributesList);

//getAttribute ==> gets the value of the specified attribute of an element.
var attribute = document.querySelector("a").getAttribute("href");

//setAttribute ==> sets the specified value to the specified attribute of the element and this method takes two arguments(attribute, value)
document.querySelector("a").setAttribute("href","https://www.bing.com");