let {name, years: age, isAdmin = false} = user


//2
const topSalary = salaries => {
	let maxName = null
	let max = 0

	for(const [name, salary] of Object.entries(salaries)) {
		if (max < salary) {
			max = salary
			maxName = name
		}
	}

	return maxName
}