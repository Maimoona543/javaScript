function maximumSum(a, m) {
    // Write your code here
    let result = [];
    let sum =0
    let e= []
    for (let i = 0 ; i < a.length;i++){
   for (let j = i; j < a.length;j++){
     let d = a.slice(i,j+1)
     result.push(d)
   }
    }
  let b = result.map(item => item.reduce((acc,value) => acc + value), 0).map(item => item % m)
  return Math.max(...b)
}
console.log(maximumSum([3 ,3 ,9 ,9 ,5],7))
