
function squares(a, b) {
    // Write your code here
    let count = 0;
for (let i = a;i<= b ;i++){
    if (Math.sqrt(i) %1 === 0){
        count++
    }
}
return count
}
console.log(squares(24,49))