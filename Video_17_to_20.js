/*
let a = [1,2,3,4];
let b = a.toString();
console.log(b);

let c = a.join("a");
console.log(c);

c= a.join("-");
console.log(c);

console.log(typeof c);

let p = a.pop();
console.log(p);
*/

a = [1,2,3,4,5];
// delete(a[0]);
// delete a[1];
console.log(delete(a[0]));

console.log(a);

a=[1,2,3];
b=[4,5,6];
c=[7,8,9];
let d = a.concat(c,b);
console.log(d);

a = [10,11,12];
b = [13,14,15];
// let z = concat(a,b); //it throws error
// console.log(z);

a=[9,2000];
a.sort();
console.log(a);

a = [551,3,2,5,1,9,8];
compare=(a,b)=>{
    return a-b;
}
a.sort(compare);
console.log(a);


a = [1,2,3,4,5,6];
a.splice(1,2,11,12,13,14);
console.log(a);

a = [1,2,3,4,5,6];
a.splice(1,0,11,12,13);
console.log(a);

a = [1,2,3,4,5,6];
b = a.splice(1,0,11,12,13); //it return a array which contains deleted values
console.log(a);
console.log(b);

a = [1,2,3,4,5,6,7,8,9];
b = a.slice(3);
console.log(b); //it will give = 4,5,6,7,8,9

b = a.slice(3,7); //it will give 4,5,6,7 means from 3rd index to 7-1 index
console.log(b);


let z = "vishal";
// let b = Array.from(z);
console.log(Array.from(z));
let x = Array.from(z);
console.log(x);

//map
let array = [1,2,3,4,5,6,7];
let ans = array.map((element)=>{
    
    return element+1;
});
console.log(ans);

array = [1,2,3,4,5,6,7];
ans = array.map((element)=>{
    console.log(element);
    return element+1;
});
console.log(ans);


//filter
arr = [98,262,16,3,9,1];
ans = arr.filter((value)=>{
    return value<10;
})
console.log(ans);

arr = [98,262,16,3,9,1];
// arr = [1,2,3,4,5,6,7,8,9,10];
ans = arr.filter((value,value2)=>{
    console.log(value,value2);
    
    return value+value2<10;
    // return 10;
})
console.log(ans);
console.log("hhh");



console.log("reduce function");

arr = [1,2,3,4,5,6,7,8,9,10];
ans = arr.reduce((h1,h2)=>{
    console.log(h1);
    
    return h1+h2;
});
console.log(ans);
