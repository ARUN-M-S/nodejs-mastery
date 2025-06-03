const crypto = require('crypto');

// process.env.UV_THREADPOOL_SIZE=2;

crypto.pbkdf2("password","salt",5000000,50,'sha512',(err,key)=>{
    console.log("Password 1");
})

crypto.pbkdf2('password','salt',5000000,50,'sha512',(err,key)=>{
    console.log("Password 2");
})


crypto.pbkdf2("password","salt",5000000,50,'sha512',(err,key)=>{
    console.log("Password 3");
})

crypto.pbkdf2('password','salt',5000000,50,'sha512',(err,key)=>{
    console.log("Password 4");
})

crypto.pbkdf2('password','salt',50000,50,'sha512',(err,key)=>{
    console.log("Password 5");
})