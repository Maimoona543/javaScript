function equalizeArray(arr) {
    // Write your code here
    let max = 0;
let freq = {}
for (let char of arr){
    freq[char] = (freq[char] || 0)+1
}

for (let char in freq){
    if (freq[char] > max)
        max = freq[char]
}
return max
}
console.log(equalizeArray([1,3,3,3,2,3]))