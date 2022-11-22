// anonymous FUNCTION

let a =[1,2,3,4,5,6,7,8,9,10]
let res2 = function(a){
    let w = a.reduce((acc,val)=>{ 
        return acc + val
    })
    console.log(w)
}
res2(a)

// IIFE FUNCTION

// (function(a){
//     let w = a.reduce((acc,val)=>{ 
//         return acc + val
//     })
//     console.log(w)
// })
// ([1,2,3,4,5,6,7,8,9,10])

