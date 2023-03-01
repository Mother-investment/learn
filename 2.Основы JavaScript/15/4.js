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