var DonutData = function () {
	this.storeInfo = [[1, "Downtown", 8, 43, 4.5, 12],
					[2, "Capitol Hill", 4, 37, 2, 8],
					[3, "South Lake Union", 9, 23, 6.33, 12],
					[4, "Wedgewood", 2, 28, 1.25, 6],
					[5, "Ballard", 8, 58, 3.75, 24]];
					
	this.createStores = function() {
		var finalList = [];
	  	for (var i = 0; i < this.storeInfo.length; i++) {
			var thisShop = new DonutShop( this.storeInfo[i][0],this.storeInfo[i][1],this.storeInfo[i][2],this.storeInfo[i][3],this.storeInfo[i][4],this.storeInfo[i][5]);
			finalList.push("<tr><td>" + thisShop.location + "</td> <td>" + thisShop.minCust + "</td><td>" + thisShop.maxCust + "</td><td>" + thisShop.avgDonutCust + "</td><td>" + thisShop.operatingHours + "</td><td>" + thisShop.custPerHour + "</td><td>" + thisShop.donutsPerDay() + "</td></tr>");
		}
		return completedArray = finalList;	
	};
	
}