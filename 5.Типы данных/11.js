let date = new Date(2012, 1, 20, 3, 12)


//2
const getWeekDay = date => {
	let days = [ 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

	return days[date.getDay()]
}



//3
const getLocalDay = date => {
	let day = date.getDay()

	if (day == 0) {
	  day = 7;
	}

	return day;
}



//4
const getDateAgo = (date, days) => {
	let dateCopy = new Date(date)

	dateCopy.setDate(date.getDate() - days)
	return dateCopy.getDate()
}



//5
const getLastDayOfMonth = (year, month) => {
	let date = new Date(year, month + 1, 0)

	return date.getDate()
}



//6
const getSecondsToday = () => {
	let date = new Date()

	return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
}


//7
const getSecondsToTomorrow = () => {
	let now = new Date()
	let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1)

	let diff = tomorrow - now
	return Math.round(diff / 1000)
}


//8
const formatDate = date => {
	let diff = new Date() - date

	if (diff < 1000) {
		return 'прямо сейчас'
	}

	let sec = Math.floor(diff / 1000)

	if (sec < 60) {
		return `${sec} сек. назад`
	}

	let min = Math.floor(diff / 60000)

	if (min < 60) {
		return `${min} мин. назад`
	}

	let d = date
	d = [
	  '0' + d.getDate(),
	  '0' + (d.getMonth() + 1),
	  '' + d.getFullYear(),
	  '0' + d.getHours(),
	  '0' + d.getMinutes()
	].map(component => component.slice(-2))

	return `${d.slice(0, 3).join('.')} ${d.slice(3).join(':')}`
  }