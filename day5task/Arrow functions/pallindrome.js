// arrow function for palindrome

let res =((name)=>{
    let upp=name.toUpperCase()
    let name1=upp.split("")
    let reverse = name1.reverse().join("")
    if(upp == reverse){
       console.log("yes")
    }else{
        console.log("no")
    }
    })
    let name = "malayalam" //Enter Name
    res(name)