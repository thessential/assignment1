var donutArray = [[1, "Downtown", 8, 43, 4.5, 12],[2, "Capitol Hill", 4, 37, 2, 8],[3, "South Lake Union", 9, 23, 6.33, 12],[4, "Wedgewood", 2, 28, 1.25, 6],[5, "Ballard", 8, 58, 3.75, 24]];
    // Class 'DonutShop()'
var DonutShop = function( storeId, location, minCust, maxCust, avgDonutCust, operatingHours ) {
	
	this.storeId = storeId;
	this.location = location;
	this.minCust = minCust;
	this.maxCust = maxCust;
	this.avgDonutCust = avgDonutCust;
	this.operatingHours = operatingHours;
	
	this.getLocation = function() {
		return this.location;
	}
	this.setLocation = function( location ) {
		this.location = location;
	}
	
	this.getMinCust = function() {
		return this.minCust;
	}
	this.SetMinCust = function(minCust) {
		this.minCust = minCust;
	}
	
	this.custPerHourCalc = function() {
		return Math.floor(Math.random() * (maxCust - minCust) + minCust);
	}
	
	this.custPerHour =  this.custPerHourCalc();
	
	this.donutsPerDay = function() {
		return (avgDonutCust * this.custPerHour * operatingHours);
	}
}