//commonjs

console.log("welcome to main body");


//using this 1 am getting only 1 function and i can give it to any name also,and that name like func will
//be function for here.it refers to that file function
// const func1 = require("./video_97_2");
// func1();

//if i am getting more than one function then
// const func2 = require("./video_97_2");
// func2.f1();
// func2.f2();
//but here need to write func2 again and again so we can use destructuring also here

const {f1,f2} = require("./video_97_2");
f1();
f2();
//here need to write same function name



// ES6 Modules
