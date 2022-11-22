
// anonymous function
let res = function(name){
let name1=name.split("")
let reverse=name1.reverse().join("")
// console.log(name.join(""))
// console.log(reverse)
if(name==reverse){
    console.log("yes")
}else{
    console.log("no")
}
}
let name="appa"
res(name)



// IIFE FUNCTION

// (function(name){
// // let name="appa"
// let name1=name.split("")
// let reverse=name1.reverse().join("")
// // console.log(name.join(""))
// // console.log(reverse)
// if(name==reverse){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// })
// ("APPA") //Enter name to Check it
