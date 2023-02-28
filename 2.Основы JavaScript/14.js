function checkAge(age) {
	return (age > 18) ? true : confirm('Родители разрешили?')
}


function checkAge(age) {
	return (age > 18) || confirm('Родители разрешили?')
}


function min(a, b) {
	return a < b ? a : b
}


function pow(x, n) {
	return x**n
}

let x = prompt('Введите x', '')
let n = prompt('Введите n', '')

if (n < 1) {
	alert('Ошибка')
} else {
	alert(pow(x, n))
}