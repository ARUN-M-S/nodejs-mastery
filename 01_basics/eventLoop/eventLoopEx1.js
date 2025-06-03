const fs = require('fs');
let a=10;

setImmediate(()=>console.log("SetImmedaiate"));

fs.readFile("./file.txt","utf8",()=>{
    console.log("file readed")
})


setTimeout(()=>console.log("setTimeout"),0)

function printA(){
    console.log("a = ", a)
}

printA();
console.log("end of the file")