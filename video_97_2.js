//commonjs


const f1 = () =>{
    console.log("i am fuction 1");
}
//if i want to export 1 function then
// module.exports = f1;

const f2 = () =>{
    console.log("i am fuction 2");
}
//if i want to export more than 1 function then
module.exports = {f1,f2};
