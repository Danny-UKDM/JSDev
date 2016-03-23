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
	var n = weekday[d.getDay()];
	return n;	
};
document.write("Today is: " + currentDay() + "<br>");

var writeCurrentTime = (function (){
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
	document.write("Current Time is " + hours + " " + meridiem + " : " + minutes + " : " + seconds + "<br>");
})();