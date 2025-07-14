function beautifulDays(i, j, k) {
    // Write your code here
    let list= []
    let count = 0;
for (let k = i;k <= j;k++){
 list.push(k)
}
let reverse =list.map(item => Number(item.toString().split('').reverse().join('')))
for (let z = 0;z < list.length;z++){
  let operation = (list[z] - reverse[z]) 
  if (operation % k === 0)
  count++
}
return count
}
console.log(beautifulDays(20 ,23 ,6))