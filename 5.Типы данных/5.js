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


const copySorted = arr => arr.slice().sort()
