// arrow function for prime

let res=((n)=>{
let isPrime=true
    if(n==1){
        console.log(` ${n}not a prime `)
    }else if(n>2){
        for(let i=2;i<n;i++){
            if(n%i==0){
                isPrime=false
                break;
            }
        }
        if(isPrime){
            console.log(`${n} is a prime`)
        }else{
            console.log(`${n} is not a prime`)
        }
    }
})
res(19)