const usersMapped = users(item => ({
	fullName: `${item.name} ${item.surname}`,
	id: item.id
}))