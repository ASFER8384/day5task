// arrow function of tittle Caps

let  toTitleCase= ((str)=> {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  })
  console.log(toTitleCase("asfer ali"));



