const button = document.querySelector(".btn")
const buttonTwo = document.querySelector(".btnTwo")

function handleClick() {
	console.log("pressed the button")
}

const handleClickTwo = () => {
	console.log("pressed the button two")
}

// не вызываем функцию handleClick, ссылаемся на ф-ю
button.addEventListener("click", handleClick)
buttonTwo.addEventListener("click", handleClickTwo)
