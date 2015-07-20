var DonutCorp = function () {
	this.corpAddress = new Address();
	this.donutData = new DonutData();
	
	this.displayAddress = function() {
		var corpDiv = document.getElementById("corp")
		var corpH1 = corpDiv.getElementsByTagName("h2");
		var thing = corpH1[0];
		thing.innerHTML = this.corpAddress.addresses[0][1]+"<br />"+this.corpAddress.addresses[0][2] + " " + this.corpAddress.addresses[0][3];
	}
}