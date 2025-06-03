const fs = require('fs');

let a=100;


setImmediate(()=>console.log("set Immediate"));

Promise.resolve('Promise').then(console.log);

fs.readFile('./file.txt','utf8',()=>{
    process.nextTick(()=>console.log("Second next tick"))
    setImmediate(()=>console.log("set Immediate 2"));
    setTimeout(()=>console.log("set Time out 2"),0);
    console.log("file readed")
});

setTimeout(()=>console.log("set Time out"),0);


process.nextTick(()=>console.log("process Next tick"));



function  printA(){
    console.log("a = " ,a)
}

printA();

console.log("end of file ")

/*  
guess Out put----
end of file
a =  100
process Next tick
Promise
set Time out
set Immediate
file readed
"Second next tick
set Immediate 2
set Time out 2

*/