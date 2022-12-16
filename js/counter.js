
document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('12 31 2022 00:00:00');
	
	const hoursVal = document.querySelectorAll('.time-count__hours .time-count__val');
	const minutesVal = document.querySelectorAll('.time-count__minutes .time-count__val');
	const secondsVal = document.querySelectorAll('.time-count__seconds .time-count__val');

	const timeCount = () => {
		let now = new Date();
		let leftUntil = newYear - now;
		
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

        hoursVal.forEach(val => val.textContent = hours)
        minutesVal.forEach(val => val.textContent = minutes)
        secondsVal.forEach(val => val.textContent = seconds)

	};

    
	timeCount();
	setInterval(timeCount, 1000);
});