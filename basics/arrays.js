let arr1 = [10,20,30,40,50]
let arr2 = new Array(2,3,4,5,6)
console.log(arr2[1])

//arrays methods
arr2.push(10)
console.log(arr2)
arr2.unshift(12)
console.log(arr2)
arr2.shift()
console.log(arr2)
console.log(arr2.includes(4))
console.log(arr2.indexOf(2))
let arr3 = arr2.join()   //join converts array type to string
console.log(arr2)
console.log(arr3)
let myarr1 = arr2.slice(0,2)
console.log(arr2)
console.log(myarr1)
let myarr2 = arr2.splice(0,2)
console.log(arr2)
console.log(myarr2)