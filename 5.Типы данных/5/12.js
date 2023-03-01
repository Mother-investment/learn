const unique = arr => {
	let result = []

	for (let value of arr) {
		if (!result.includes(value)) {
			result.push(value)
		}
	}

	return result
}