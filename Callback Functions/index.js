alert("js loaded");

/*Functions which accepts other functions as input is called higher order functions. The functions which
gets passed as input to the higher order functions are called as callback functions. The callback function
waits for something to happen(example a click event) and once that thing happens will get calledback and
gets executed
Eg:
document.querySelector("button").addEventListener("click", function (){
    alert("i'm clicked");
});
here the anonyumous function inside the event listener is the callback function
*/

//The below code is simple javascript which explains the working of callbacks and higher order functions
function anotherEventListener(typeOfEvent, callback){
    //When that event happened an object and various properties are created to store data about the event
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2  //these are some sample properties
    }

    /*If the event which is triggered by the user(eventThatHappened) in html page in browser is equal to
    the actual event which the user wanted to happen, the calback is called to execute certain tasks*/
    if(eventThatHappened.eventType === typeOfEvent){
        callback(eventThatHappened);
    }
}

//The name of parameter inside the callback can be of any name desired by the user
anotherEventListener("keypress", function(event){
    console.log(event);
});