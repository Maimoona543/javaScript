function simpleArraySum(ar) {
    // Write your code here
let sum = ar.reduce((a,b) => a+b,0)
return sum
}
console.log(simpleArraySum([1,2,3]))