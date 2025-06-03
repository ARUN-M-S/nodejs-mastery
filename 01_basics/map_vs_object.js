
let test =  Symbol('hello')
let obj ={
    "name":"Arun",
    "lastName":"Ms",
    1:24,
    [test]:12

}

let sampleObj = new Map();
sampleObj.set(1,"arun")
sampleObj.set( [test],"arun")

console.log(obj);
console.log(sampleObj);