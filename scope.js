function funcA() {
	let = 1

	function funcB() {
		let = 2

		function funcC() {
			let = 3

			console.log("funcC:", a, b, c)
		}
		funcC()
		console.log("funcB:", a, b)
	}
	funcB()
	console.log("funcA:", a)
}

funcA()
