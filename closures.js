// =======exemple1=======
// const fib = [1, 2, 3, 5, 8, 13, 21]

// for (var i = 0; i < fib.lenght; i++) {
// 	;(function (j) {
// 		setTimeout(function () {
// 			console.log(`fib[${i}] = ${fib[i]}`)
// 		}, 1500)
// 	})(i)
// }

// =======exemple2=======

// function createFrameworkManager() {
// 	const fw = ["Angular", "React"]
// 	return {
// 		print: function () {
// 			console.log(fw.join(" "))
// 		},
// 		add: function (framework) {
// 			fw.push(framework)
// 		},
// 	}
// }

// const manager = createFrameworkManager()
// manager.print()
// manager.add("VueJS")
// manager.print()

// =======exemple3=======

// function external() {
// 	const externalVar = "I external function"

// 	function internal() {
// 		const internalVar = "I internal function"
// 		console.log("internalVar >", internalVar)
// 		console.log("externalVar >", externalVar)
// 	}
// 	return internal
// }
// const internalFn = external()
// internalFn()

// =======exemple4=======

// function createAddress(type) {
// 	const address = type.toUpperCase()
// 	return function (name) {
// 		return `${address} ${name}`
// 	}
// }

// const addressCitizen = createAddress("Гражданин")
// const addressCitizenWoman = createAddress("Гражданка")

// console.log(addressCitizen("Володя"))
// console.log(addressCitizenWoman("Людмила"))

// =======exemple5=======

function createPlayer(name) {
	let score = 0
	return function scoreCount() {
		score++
		return `${name} - ${score} баллов!`
	}
}
const playerOne = createPlayer("Ilia")
const playerTwo = createPlayer("Ylia")

