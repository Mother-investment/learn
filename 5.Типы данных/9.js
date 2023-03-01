const sumSalaries = salaries => Object.values(salaries).reduce((acc, item) => acc + item, 0)


const count = obj => Object.keys(obj).length