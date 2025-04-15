//getElementsByTagName() ==> gets all the elements with the given tag name in a array
console.log(document.getElementsByTagName("li")); //prints an array of all li tags

//will select the item at index 2 in list array and set its color to purple
document.getElementsByTagName("li")[2].style.color = "pink"; 

var numberOfElements = document.getElementsByTagName("li").length;
console.log(numberOfElements);

//getElementsByClassName() ==> gets all the elements with the given class name in an array
console.log(document.getElementsByClassName("btn")); // prints an array of elements with classname btn

//eventhough there is only one element we still need to specify index since getElements methods returns an array
document.getElementsByClassName("btn")[0].style.color = "purple"; 

//getElementById ==> gets the element with the given ID and will return only one element not an array
var intro = document.getElementById("title");
intro.innerHTML = "GoodBye!";

/*querySelector ==> gets the element for the specified selector. It maybe a class selector, id selector, element selector or 
even chained selectors. It will return only single element. When the selectors selects more than one element, for example "#list .item"
selects all the list, but only the 1st element will be returned */
var i = document.querySelector("label#label1");
i.innerHTML = "Ondru";
var j = document.querySelector("input+label#label2");
j.style.color = "green";
var anchor = document.querySelector("li a");
console.log(anchor);

//querySelectorAll ==> gets all elements that matches the specified selector.
var listItems = document.querySelectorAll("#list .item");
console.log(listItems);
document.querySelectorAll("#list .item")[1].style.color = "orange";


//Challenge
document.querySelector("li a").style.color = "red";

//CSS property names will differ when used in JS. Refer https://www.w3schools.com/jsref/dom_obj_style.asp
document.querySelector("#title").style.fontSize = "5rem"; 

document.querySelector(".btn").style.backgroundColor = "yellow";

