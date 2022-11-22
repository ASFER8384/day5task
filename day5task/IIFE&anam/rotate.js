// k=3 and the string rotated by k times
// anonymous FUNCTION

let res = function(a){
let shi=a.pop()
let shi1=a.pop()
let shi2=a.pop()

    a.unshift(shi)
    a.unshift(shi1)
    a.unshift(shi2)
    console.log(a)
}
let a =[1,2,3,4,5]
res(a)

// IIFE FUNCTION

// (function(a){
// let shi=a.pop()
// let shi1=a.pop()
// let shi2=a.pop() 

//     a.unshift(shi)
//     a.unshift(shi1)
//     a.unshift(shi2)
//     console.log(a)
// })
// ([1,2,3,4,5])
