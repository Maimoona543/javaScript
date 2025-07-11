function jimOrders(orders) {
    // Write your code here
    let sum = 0;
    let list = []

for (let i = 0; i< orders.length;i++){
  sum = 0;
  for (let j = 0; j < orders[i].length;j++){
   sum += orders[i][j]
  }
   list.push({index:i+1,sum:sum})
  
} 
list.sort((a,b) => a.sum - b.sum)
let a = list.map(index => index.index)
return a
}
console.log(jimOrders([[1 ,3],[2 ,3],[3 ,3]]))