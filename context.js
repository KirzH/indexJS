const person = {
	surname: "Kirzhakov",
	knows: function (what, name) {
		console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
	},
}

const john = { surname: "Киржаков" }

person.knows("всё", "Vadim")
person.knows.call(john, "ничего не", "Илья")
person.knows.apply(john, ["ничего не", "Илья"])
person.knows.call(john, ...['Ничего не','Илья'])
const bound = person.knows.bind(john, 'Ничего не','Илья')
bound()