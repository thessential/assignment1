var DonutCorp = function () {
	this.corpAddress = new Address();
	this.donutData = new DonutData();
	
	this.displayAddress = function() {
		var corpDiv = document.getElementById("corp")
		var corpH1 = corpDiv.getElementsByTagName("h2");
		var thing = corpH1[0];
		thing.innerHTML = this.corpAddress.addresses[0][1]+"<br />"+this.corpAddress.addresses[0][2] + " " + this.corpAddress.addresses[0][3];
	}
	
	this.storeList = function() {		
		var finalStoreList = [];
		for (var i = 0; i < this.corpAddress.addresses.length; i++) {
			for (var j = 0; j < this.donutData.storeInfo.length; j++) {
				if (this.corpAddress.addresses[i][0] === this.donutData.storeInfo[j][0]) {
					finalStoreList.push("<p>"+this.donutData.storeInfo[j][1]+"<br />"+this.corpAddress.addresses[i][1]+"<br />"+this.corpAddress.addresses[i][2]+" "+this.corpAddress.addresses[i][3])+"</p>";
				}
			}
		}
		return finalStoreListArray = finalStoreList;
	}
}