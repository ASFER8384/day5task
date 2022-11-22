// anonymous function

let arr = [ 1,2,3,4,5,2,4,1,6]
let arr1=[]
let q = function(arr){
for(var index of arr){
    if(!arr1.includes(index)){
        arr1.push(index)
    }
}console.log(arr1)
}
q(arr)



// IIFE Function


// (function(arr4){
//     let arr5=[]
//     for(var index of arr4){
//         // console.log(index)
//         if(!arr5.includes(index)){
//             arr5.push(index)
//         } 
//         }
//         console.log(arr5)
    
// }) 
// ([1,2,3,4,5,2,4,1])
