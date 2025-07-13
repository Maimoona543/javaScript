
function alternate(s) {
    let a = [...new Set(s)]
    console.log('a',a)
    let b = '';
    let max = 0;
   for (let i = 0 ;  i < a.length;i++){
     for (let j = i+1;j < a.length;j++){
        b = [...s].filter(item => item === a[i] || item === a[j])
        console.log(b)
        let isValid =true
     for (let k = 0; k < b.length;k++){
       if (b[k] === b[k+1]){
       isValid = false
       console.log(isValid)
       break
       }
     }
     if (isValid === true &&  b.length > max)
     max = b.length
     }
     }
return max
}
console.log(alternate('abaacdabd'))