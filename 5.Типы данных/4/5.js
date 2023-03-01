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