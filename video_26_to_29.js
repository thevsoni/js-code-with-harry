let a = 5;
console.log(typeof a);
let b  = prompt("enter your number. if u enter greater than 4 then u will redirected to google else uu will stay here","2");

if(b>4){
    location.href = "https://google.com";
}
else{
    let color = prompt("enter your desired color","red");
    document.body.style.background = color;
}