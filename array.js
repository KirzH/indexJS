// let arr = [9, 5, 65, 1, 121]
// arr.sort(function (a, b) {
// 	return a - b
// })
// console.log(arr)

let arr = [
	{ name: "Vadim", age: 30 },
	{ name: "Ylia", age: 27 },
	{ name: "Ilia", age: 5 },
]

arr.sort(function(a, b) {
    return a.age - b.age
})
console.log(arr)
