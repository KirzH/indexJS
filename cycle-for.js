const cars = ["BMW", "Audi", "Toyota", "KIA", "Tesla"]

// for (let i = 0; i < cars.length; i++) {
//     cars.sort()
// 	console.log(cars[i])
// }

// cars.forEach(car => {
// 	console.log(car)
// })

// так нельзя делать
// cars.forEach(car => {
// 	console.log(car)
// 	if (car === "Tesla") {
// 		break
// 	}
// })

for (const index in cars) {
    if (index === '1') {
        continue
    }
    console.log(cars[index])
}