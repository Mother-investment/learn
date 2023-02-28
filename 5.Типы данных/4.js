let styles = ['Джаз', 'Блюз']

styles.push('Рок-н-ролл')

styles[Math.floor((styles.length - 1) / 2)] = 'Классика'

alert(styles.shift())

styles.unshift('Рэп', 'Регги')


const sumInput = () => {
	let numbers = []

	while (true) {
		let value = prompt('Введите число', 0)

		if (value === '' || value === null || !isFinite(value)) break
		numbers.push(+value)
	}

	let sum = 0

	for (let number of numbers) {
		sum += number
	}
	return sum
}


const getMaxSubSum = arr => {
	let maxSum = 0
	let currentSum = 0

	for (let item of arr) {
		currentSum += item
		maxSum = Math.max(maxSum, currentSum)
		if (currentSum < 0) currentSum = 0
	}
	for (let item of arr) {
        currentSum += item;
        if (maxSum < currentSum) {
            maxSum = currentSum
        }
        if (currentSum < 0) {
            currentSum = 0
        }
    }


	return maxSum
}