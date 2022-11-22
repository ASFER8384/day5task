// anonymous FUNCTION

let number =[1,2,3,4,5,6,7,8,9,10]
let res =[]
let p = function(number){
for(var index of number){
if(index %2 !==0){
    res.push(index)
}
}
console.log(res)

}
p(number)

// IIFE FUNCTION

// (function(number){
//     let res =[]
// for(var index of number){
// if(index %2 !==0){
//     res.push(index)
// }
// }
// console.log(res)

// })
// ([1,2,3,4,5,6,7,8,9,10])
 