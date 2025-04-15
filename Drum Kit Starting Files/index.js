alert("js loaded");

/*selecting the first button and adding an eventlistener to it. This listens to click events.
handleClick() if used will trigger the function even without clicking the button since handleClick() is
a function call.
Using handleClick will call the function at a very later time, only when a click event is performed*/
// document.querySelector("button").addEventListener("click", handleClick);

/* In the below block of code instead of separately writing and calling a function, the function itself
is described inside the eventlistener. This kind of functions is called as anonyumous functions.
*/
// document.querySelector("button").addEventListener("click", function (){
//     alert("i'm clicked");
// });

var dummy = document.querySelectorAll("button");

// document.querySelectorAll("button .drum").addEventListener("click", function (){
//     alert("i'm clicked");
// });

var button = document.querySelectorAll(".drum");
var length = document.querySelectorAll(".drum").length;
for(var i = 0; i < length; i++){
    button[i].addEventListener("click", function (){

        var text = this.innerText;
        // console.log(text);
        // if(text === "w"){
        //     this.style.color = "white"
        //     //the above statement logs which button triggered the event to the console
        //     var audio = new Audio("./sounds/crash.mp3");
        //     /*An object called audio is created and a new HtmlAudioElement is created and assigned to audio
        //     now we can use various properties of HtmlAudioElement like play on the object audio
        //     */
        //     audio.play();
        //     alert("w clicked");
        // }else if(text === "a"){
        //     var audio = new Audio("./sounds/kick-bass.mp3");
        //     audio.play();
        //     alert("a clicked");
        // }else if(text === "s"){
        //     var audio = new Audio("./sounds/snare.mp3");
        //     audio.play();
        //     alert("s clicked");
        // }else if(text === "d"){
        //     var audio = new Audio("./sounds/tom-1.mp3");
        //     audio.play();
        //     alert("d clicked");
        // }else if(text === "j"){
        //     var audio = new Audio("./sounds/tom-2.mp3");
        //     audio.play();
        //     alert("j clicked");
        // }else if(text === "k"){
        //     var audio = new Audio("./sounds/tom-3.mp3");
        //     audio.play();
        //     alert("k clicked");
        // }else{
        //     var audio = new Audio("./sounds/tom-4.mp3");
        //     audio.play();
        //     alert("l clicked");
        // }

        keyPress(text);
        buttonAnimation(text);

    });
}

/*In addEventListener function we pass other functions as an input, such functions which accepts other
functions as input is called as higher order functions */

function handleClick(){
    alert("i'm clicked");
}

/*Keydown event listener listens for keypress and performs actions based on the function.
Keyup event listener listens for events when a key is released and performs actions based on the function

In keydown/keyup events we addEventListener to document(the whole webpage) to detect keydown/keyup events
*/

document.addEventListener("keydown", function(event){
    /*we listen to the event which triggers the function by passing event as parameter.
    we use the property named key of the event(keyboardevent) to print the key which triggered the event */
    var keyPressed = event.key;
    // console.log(keyPressed);
    // alert("Key pressed " + keyPressed);
    keyPress(keyPressed);
    buttonAnimation(keyPressed);
});



function keyPress(key){
    switch (key) {
        case "w":
            // console.log("inside switch key value = " + key + " type = " + typeof(key));
            // key.style.color = "white";
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            // this.style.color = "white";
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
    
        case "s":
            // this.style.color = "white";
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;  
        
        case "d":
            // this.style.color = "white";
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
            
        case "j":
            // this.style.color = "white";
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;  
            
        case "k":
            // this.style.color = "white";
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            // this.style.color = "white";
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(key);
            alert("you have clicked wrongly");
            break;
    } 
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key); //if key is w then ("." + key) = ".w"
    activeButton.classList.add("pressed");

    /*setTimeout is used to perform certain task after a specific time, here the callback is used to
    perform the task after the some timeperiod
    Syntax : setTimeout(callback, durationinmilliseconds)*/
    setTimeout(function() {
        activeButton.classList.remove("pressed");        
    }, 100)
    

}

// keyPress();