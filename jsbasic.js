document.body.insertAdjacentHTML( 'afterbegin', '<h1>Challenge 1</h1>' );
var currentDay = function (){
	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var dayResult = weekday[d.getDay()];
	return dayResult;	
};
var writeDay = document.createElement('p');
writeDay.textContent = "Today is: " + currentDay();
document.body.appendChild(writeDay);

var currentTime = function (){
	var t = new Date();
	var hours = t.getHours();
	var minutes = t.getMinutes();
	var seconds = t.getSeconds();
	var meridiem = "";

	if (hours < 12) {		
		meridiem = "AM";
	} else {
		hours -= 12;
		meridiem = "PM";
	}	
	var timeResult = {hours: hours, minutes: minutes, seconds: seconds, meridiem: meridiem};
	return timeResult;
};
var t = currentTime();
var writeTime = document.createElement('p');
writeTime.textContent = "Current Time is " + t.hours+ " " + t.meridiem + " : " + t.minutes + " : " + t.seconds;
document.body.appendChild(writeTime);