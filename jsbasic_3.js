var getDate = function() {
	var d = new Date(); 
	var date = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();
	var dateResult = {date: date, month: month, year: year};
	return dateResult;
}
var d = getDate();
var writeDate = document.createElement('p');
writeDate.textContent = d.date + "/" + d.month + "/" + d.year;
document.body.appendChild(writeDate);