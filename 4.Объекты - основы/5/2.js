function Calculator() {
	this.read = function() {
		this.firstNum = +prompt('Введите первое число', 0)
		this.secondNum = +prompt('Введите второе число', 0)
	}

	this.sum = function() {
		return this.firstNum + this.secondNum
	}

	this.mul = function() {
		return this.afirstNum * this.secondNum
	}
}

let calculator = new Calculator()
calculator.read()

alert( 'Sum=' + calculator.sum() )
alert( 'Mul=' + calculator.mul() )