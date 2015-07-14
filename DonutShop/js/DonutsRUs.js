var finalList = [];
var DonutsRUs = function () {
	this.allShops = function() {
	  	var myTr = document.getElementById("tableContent");
	  	var finalList = [];
	  	for (var i = 0; i < donutArray.length; i++) {
	  		var thisShop = new DonutShop( donutArray[i][0],donutArray[i][1],donutArray[i][2],donutArray[i][3],donutArray[i][4],donutArray[i][5]);
	  		finalList.push("<tr><td>" + thisShop.location + "</td> <td>" + thisShop.minCust + "</td><td>" + thisShop.maxCust + "</td><td>" + thisShop.avgDonutCust + "</td><td>" + thisShop.operatingHours + "</td><td>" + thisShop.custPerHour + "</td><td>" + thisShop.donutsPerDay() + "</td></tr>");
	  	}
	  	myTr.innerHTML = finalList.join("");
	}
}