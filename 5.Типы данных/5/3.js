const filterRangeInPlace = (arr, a, b) => {
	let val = arr[i]

    if (val < a || val > b) {
    	arr.splice(i, 1)
    	i--
    }
}