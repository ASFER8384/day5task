// anonymous FUNCTION

// let res = function(str){
//    return str.toLowerCase().split(" ").map(function (word){
//         return (word.charAt(0).toUpperCase() + word.slice(1));
//    }).join('')
// }
// console.log(res("asfer"))


// IIFE FUNCTION

(function(str){
    return str.toLowerCase().split(' ').map(function (word){
        console.log(word.charAt(0).toUpperCase() + word.slice(1));
    }) 
})
("mohammed")