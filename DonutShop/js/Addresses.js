var addressArray = [[1,"111 Main St","WA",111111],[2,"222 Main St","WA",111111],[3,"333 Main St","WA",111111],[4,"444 Main St","WA",111111],[5,"555 Main St","WA",111111]];

var Address = function (storeId,street,city,state,zip) {
	this.storeId = storeId;
	this.street = street;
	this.city = city;
	this.state = state;
	this.zip = zip;
}