const { assert } = require("console");

console.log(Math);
let a = Math.E;
console.log(a);
console.log(console);
console.error("hey this is error");

console.log(assert);

let employee = {
    name : "vishal",
    surname : "soni",
    age : 23,
}
console.table(employee);

console.time("timeOfForLoopRunning");
for(let i = 0; i<100000; i++){
    i++;
}
console.timeEnd("timeOfForLoopRunning");
