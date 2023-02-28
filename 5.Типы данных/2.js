let firstNum = +prompt('Введите первое число', '')
let secondNum = +prompt('Введите второе число', '')

alert(firstNum + secondNum)


const readNumber = () => {
	let num

	do {
		num = prompt('Введите число', 0)
	} while (!isFinite(num))

	if (num === null || num === '') return null

	return +num
}


const random = (min, max) => min + Math.random() * (max - min)


const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))