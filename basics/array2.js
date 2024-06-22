let arr1 = [10,20,30]
let arr2 = [40,50,60]
let arr3 = [...arr1,...arr2]
let arr4 = [70,80,90]
console.log(arr3)
// concat
console.log(arr1.concat(arr2))
console.log(Array.of(arr1,arr2))
let string1 = "Aizen Sosuke"
console.log(Array.from(string1))