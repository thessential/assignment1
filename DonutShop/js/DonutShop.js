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