// let arr=[1,[2,[3,[4],[5]],[6]],7] 

const { type } = require("os");


// function flatten(arr){
//     if(!Array.isArray(arr)) return 'Please Provide a valid array';

//     return arr.reduce((acc,val)=>Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),[])
// }


let obj={  a:{
    a1:1,
    a2:2,
    a3:3
},
b:{
    b1:1,
    b3:5,
    z:{
        z1:3,
        z2:8
    }

},
c:{
    d1:5
}
}
// function flattenObj(obj){
// let x= {}
//      function flatten (data){
//         Object.keys(data).forEach((key)=>{
//             if(typeof data[key] =='object'){
//                 flatten(data[key])
//             }else{
//                 x[key] = data[key]
//             }
//         })

//     }

//     flatten(obj);
//     return x

// }

// console.log(flattenObj(obj));

// function flatWithpath(obj,path='',result={}){
//     Object.keys(obj).forEach((keys)=>{
//        let currentPath = path ? `${path}.${keys}` :keys;
//        if(typeof obj[keys] =='object' && typeof obj[keys]!==null && !Array.isArray(obj[keys])){
//         flatWithpath(obj[keys],currentPath,result)
//        } else{
//            result[currentPath] = obj[keys]
//        }
//     })

//     return result;
// }
// console.log(flatWithpath(obj))
// let strs = ["eat","tea","tan","ate","nat","bat"]

// function groupAnagram(str){
//     let obj={};
// for(let elm of str){
//     let sorted = elm.split('').sort().join('');

//     if(obj[sorted]){
//         obj[sorted].push(elm);

//     }else{
//         obj[sorted]=[elm]
//     }
// }
// return Object.values(obj)
// }


// groupAnagram(strs)


function findGcd(num1,num2){
    let gcd=(a,b)=>b==0? a:gcd(b,a%b);
    let length = gcd(num1,num2);
    console.log(length);
}

let gcd=(a,b)=>b==0? a:gcd(b,a%b);

console.log(gcd(9,12));