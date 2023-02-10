//Guess the number between 100 and 200

var a = parseInt(100+Math.random()*(200-100));

var numberOfTry=0;
while(true){
    numberOfTry++;
    let b = prompt("wnter your number");
    if(b==a){
        console.log("you got it with number of tried = ",numberOfTry);
        break;
    }
    else{
        if(b>a){
            console.log("your number is greater then a");
        }
        else{
            console.log("your number is lesser then a");
        }
        
    }
}

