//use lower case letter only snake,water,gun

alert("use lower case letter only snake,water,gun \n hey");

let i = 1;
while (i < 10) {


    let userInput = prompt("its your turn ,choose out of snake,water,gun");
    let computerInput = parseInt(1 + Math.random() * 2);
    // console.log(typeof computerInput);

    // let array = ["snake","water","gun"];
    if (computerInput == 1) {
        computerInput = "snake";
    }
    else if (computerInput == 2) {
        computerInput = "water";
    }
    else {
        computerInput = "gun";
    }

    console.log("user input = " + userInput + " , computer input = " + computerInput);
    if (userInput == computerInput) {
        console.log("match draw");
    } else if (userInput == "snake" && computerInput == "water") {
        console.log("user won");
    } else if (userInput == "snake" && computerInput == "gun") {
        console.log("computer won");
    } else if (userInput == "water" && computerInput == "snake") {
        console.log("computer won");
    } else if (userInput == "water" && computerInput == "gun") {
        console.log("user won");
    } else if (userInput == "gun" && computerInput == "snake") {
        console.log("user won");
    } else if (userInput == "gun" && computerInput == "water") {
        console.log("computer won");
    }

    i++;

}