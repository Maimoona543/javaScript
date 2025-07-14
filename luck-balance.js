function luckBalance(k, contests) {
    // Write your code here
    let sum =0;
    let imp = []
    for (let i = 0 ; i < contests.length;i++){
      //we dont need two loops cuz we already know each i consist of only 2 elements so...
      console.log(i)
      let luck = contests[i][0]
      let importance = contests[i][1]
        if (importance === 0){
         sum+=luck
         console.log(sum)
        }
        else imp.push(luck)
      }
    
  imp = imp.sort((a,b) => b-a)
   
  for (let i = 0 ; i < imp.length;i++){
    if ( i < k){
      sum += imp[i]
    }
    else 
    sum -= imp[i]
  }
return imp
}
console.log(luckBalance(3,[[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]))