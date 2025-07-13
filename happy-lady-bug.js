
function happyLadybugs(b) {
let count = 0
b = b.split('')
let freq = {}

let a = '_'
if (b.includes(a)){
  let c = b.filter(item => item !== a)
  for (let char of c){
    freq[char] = (freq[char] || 0) + 1
  }
  for (let key in freq){
    if (freq[key] === 1)
    return 'NO';
  }
  return 'YES';
}

let d = new Set(b)
for (let i = 0; i < b.length;i++){
  if (b[i] === b[i+1])
  count++
}
if (count === d.size)
return 'YES';


else return 'NO';

}
console.log(happyLadybugs('RRXX'))