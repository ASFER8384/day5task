// arrow function for odd

let res= (()=>{
    let a =[1,2,3,4,5,6,7,8,9,0]
    let odd=[]
for(let i=0;i<a.length;i++){
if(a[i]%2!=0){
odd.push(a[i])
}
}
console.log(odd)
})
res()