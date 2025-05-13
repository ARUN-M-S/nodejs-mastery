const fs = require('fs');

let a=100;


setImmediate(()=>console.log("set Immediate"));

Promise.resolve('Promise').then(console.log);

fs.readFile('./file.txt','utf8',()=>{
    console.log("file readed")
});

setTimeout(()=>console.log("set Time out"),0);


process.nextTick(()=>console.log("process Next tick"));



function  printA(){
    console.log("a = " ,a)
}

printA();

console.log("end of file ")