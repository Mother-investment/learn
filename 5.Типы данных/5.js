const camelize = str => str.split('-')
							.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
							.join('')


const filterRange = (arr, a, b) => arr.filter(item => (a <= item <= b))


const filterRangeInPlace = (arr, a, b) => {
	let val = arr[i]

    if (val < a || val > b) {
    	arr.splice(i, 1)
    	i--
    }
}


let arr = [5, 2, 1, -10, 8]

arr.sort((a, b) => b - a)


const copySorted = arr => [...arr].sort()


function Calculator() {

	this.methods = {
		'-': (a, b) => a - b,
		'+': (a, b) => a + b
	}

	this.calculate = function(str) {

		let split = str.split(' '),
				a = +split[0],
				op = split[1],
				b = +split[2]

	  	if (!this.methods[op] || isNaN(a) || isNaN(b)) {
			return NaN
	  	}

	  	return this.methods[op](a, b)
	}

	this.addMethod = function(name, func) {
		this.methods[name] = func
	}
}


let names = users.map(item => item.name)


const usersMapped = users(item => ({
	fullName: `${item.name} ${item.surname}`,
	id: item.id
}))


const sortedByAge = users => {
	users.sort((a, b) => a.age - b.age)
}


const shuffle = array => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1))
		[array[i], array[j]] = [array[j], array[i]]
	}
}


const getAverageAge = users => users.reduce((acc, item) => acc + item.age, 0) / users.length


const unique = arr => {
	let result = []

	for (let value of arr) {
		if (!result.includes(value)) {
			result.push(value)
		}
	}

	return result
}


const groupById = arr => {
	return arr.reduce((acc, item) => {
		acc[item.id] = item;
		return acc
	}, {})
}