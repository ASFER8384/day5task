//anonymous 

let a =function(n){
    let isPrime=true
    if(n==1){
        console.log("not prime")
    }else if(n>2){
        for(let i=2; i<n;i++){
            if(n%i==0){
                isPrime=false
                break;
            }
        }
                if(isPrime){
                    console.log(`${n} is a prime number`)
                }else{
                    console.log(`${n} is not a prime number`)
                }
            }
            else{
                console.log(`not prime`)
            }
        }
          (17)          //function call "enter number to check it"


// IIFE FUNCTION


// (function(n){

//     let isPrime=true

//     if(n==1){
//         console.log("not a prime")
//     }else if(n>2){
//         for(let i=2; i<n;i++){
//             if(n%i==0){
//                 isPrime=false
//                 break;
//             }
//         }
//         if(isPrime){
//             console.log(`${n} is a prime`)
//         }else{
//             console.log(`${n} is not a prime`)
//         }
//     }
//     else{
//         console.log(`${n} is not a prime`)
//     }
// })
// (19)      //function call "enter number to check it"