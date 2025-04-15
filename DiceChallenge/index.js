/*
You can use performance.getEntriesByType("navigation")[i].type. It will be 0 if you are coming through a
URL. It will be 1 if you are refreshing, and it will be 2 if you are coming using the forwards/backwards
buttons in your web browser. 
*/

if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice(){
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    console.log(randomNumber1);

    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    console.log(randomNumber2);

    var randomImage1 = "dice" + randomNumber1 + ".png";
    var randomImage2 = "dice" + randomNumber2 + ".png";

    var randomImageSource1 = "imagees/" + randomImage1;
    var randomImageSource2 = "imagees/" + randomImage2;

    var image1 = document.querySelector(".img1");
    var image2 = document.querySelector(".img2");

    image1.setAttribute("src", randomImageSource1);
    image2.setAttribute("src", randomImageSource2);

    // if(randomNumber1 === 1){
    //     document.querySelector(".img1").setAttribute("src", "imagees/dice1.png");
    // }else if(randomNumber1 === 2){
    //     document.querySelector(".img1").setAttribute("src", "imagees/dice2.png");
    // }else if(randomNumber1 === 3){
    //     document.querySelector(".img1").setAttribute("src", "imagees/dice3.png");
    // }else if(randomNumber1 === 4){
    //     document.querySelector(".img1").setAttribute("src", "imagees/dice4.png");
    // }else if(randomNumber1 === 5){
    //     document.querySelector(".img1").setAttribute("src", "imagees/dice5.png");
    // }

    // if(randomNumber2 === 1){
    //     document.querySelector(".img2").setAttribute("src", "imagees/dice1.png");
    // }else if(randomNumber2 === 2){
    //     document.querySelector(".img2").setAttribute("src", "imagees/dice2.png");
    // }else if(randomNumber2 === 3){
    //     document.querySelector(".img2").setAttribute("src", "imagees/dice3.png");
    // }else if(randomNumber2 === 4){
    //     document.querySelector(".img2").setAttribute("src", "imagees/dice4.png");
    // }else if(randomNumber2 === 5){
    //     document.querySelector(".img2").setAttribute("src", "imagees/dice5.png");
    // }

    var winner = document.querySelector("h1");
    console.log(winner.innerHTML);

    if(randomNumber1 === randomNumber2){
        winner.innerHTML = "Draw!";
    }else if (randomNumber1 > randomNumber2){
        winner.innerHTML = " 🚩Player1 Wins!!!";
    }else{
        winner.innerHTML = "Player2 Wins!!! 🚩";
    }
}
