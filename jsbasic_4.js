var triangleArea = function (a, b, c) {
		var perimeter = (a + b + c) / 2;
		var area = Math.sqrt(perimeter*((perimeter - a)*(perimeter - b)*(perimeter - c)));
		area = area.toFixed(4);
		return area; 
}
var tA = triangleArea(5, 6, 7);
var writeArea = document.createElement('p');
writeArea.textContent = "Area of triangle = " + tA + "cm";
document.body.appendChild(writeArea);