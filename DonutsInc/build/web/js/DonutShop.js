/*
 * @Object( DonutShop )
 */
var DonutShop = function() {
    alert( "Empty 'DonutShop'. Try DonutShop( shopId, location, minCust, maxCust, avgDonutCust, operatingHours )" );
};

var DonutShop = function( shopId, location, minCust, maxCust, avgDonutCust, operatingHours ) {

    this.location       = "" ;
    this.address        = new Address();
    this.minCust        = 0 ;
    this.maxCust        = 0 ;
    this.avgDonutCust   = 0 ;
    this.operatingHours = 0 ;
    this.shopId	        = 0 ;
    this.hourId         = 0 ;

    if ( shopId === -1 ) {
        
    } else {
          this.location       = location;
          this.address        = new Address();
                this.address.setName( location[0] );
                this.address.setStreet( location[1] );
                this.address.setCity( location[2] );
                this.address.setState( location[3] );
                this.address.setZipCode( location[4] );
          this.minCust        = minCust;
          this.maxCust        = maxCust;
          this.avgDonutCust   = avgDonutCust;
          this.operatingHours = operatingHours;
          this.shopId	      = shopId;
          
          this.testCustPerHour = custPerHour( this.minCust, this.maxCust );

          this.hourId         = 0;
    }
      
      
  function custPerHour( min, max ) {
      return Math.floor(Math.random() * (maxCust - minCust) + minCust);
  };
  
  this.changeHours = function( hours, id ) {
      alert( "changeHours() hours=" + hours + ", " + "shopId=" + shopId + "" );
      this.operatingHours = hours;
  };
  
  this.setHours    = function( hours ) {
      this.operatingHours = hours;
  };
  
  this.getLocation = function() {
	  return this.location;
  };

  this.setLocation = function( location ) {
	  this.location = location;
  };
  
  this.getAddress = function() {
      var addressData = "" ;
          addressData = "" + this.address.getName()   + "<br>" +
                             this.address.getStreet() + "<br>" +
                             this.address.getCity()   + ", " + this.address.getState() + ", " + this.address.getZipCode() + "<br>";
      return addressData;
  };
  
  this.setAddress = function( location ) {
      this.address.setName( location[0] );
      this.address.setStreet( location[1] );
      this.address.setCity( location[2] );
      this.address.setState( location[3] );
      this.address.setZipCode( location[4] );
  };
		  
  this.getMinCust = function() {
	  return this.minCust;
  };

  this.setMinCust = function(minCust) {
	  this.minCust = minCust;
  };
		  
  this.custPerHourCalc = function() {
	  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
  };
		  
  this.custPerHour =  this.custPerHourCalc();
		  
  this.donutsPerDay = function() {
	  return (avgDonutCust * this.custPerHour * operatingHours);
  };

  this.getShopId = function() {
        return this.shopId ;
  };

  this.setShopId = function( shopId ) {
	this.shopId = shopId;
  };

 this.printData  = function( table, donutShop ) {
     
    var rowData = "" ;

    switch( table ) {
    	case 'A':
         // (A) Simple string w/ location name, Downtown, Capitol Hill, South Lake Union, Greenlake, and Ballard. 
         rowData   = "<tr><td>" + donutShop.location[0]       + "</td>" +
                       "<td>" + donutShop.minCust        + "</td>" +
                       "<td>" + donutShop.maxCust        + "</td>" +
                       "<td>" + donutShop.avgDonutCust.toFixed(1)   + "</td>" +
                       "<td>" + donutShop.operatingHours + "</td>" +
                       "<td>" + donutShop.custPerHour    + "</td>" +
                       "<td>" + donutShop.donutsPerDay().toFixed(0) + "</td>" +
                 "</tr>" ;
                 break;

    	case 'B':
          // (B) Change location from a simple string to an array of strings.
          rowData  = "<tr><td>" + donutShop.location[0] + "<br>" +
                                  donutShop.location[1] + "<br>" +
                                  donutShop.location[2] + ", "   + donutShop.location[3] + ", " + donutShop.location[4] + "</td>" +
                       "<td>" + donutShop.minCust        + "</td>" +
                       "<td>" + donutShop.maxCust        + "</td>" +
                       "<td>" + donutShop.avgDonutCust.toFixed(1)   + "</td>" +
                       "<td>" + donutShop.operatingHours + "</td>" +
                       "<td>" + donutShop.custPerHour    + "</td>" +
                       "<td>" + donutShop.donutsPerDay().toFixed(0) + "</td>" +
                 "</tr>" ;
                 break;
     
     	case 'C':
     	  // (C) Use 'Address' class
          rowData = "<tr><td>" + donutShop.getAddress()   + "</td>" +
                        "<td>" + donutShop.minCust        + "</td>" +
                        "<td>" + donutShop.maxCust        + "</td>" +
                        "<td>" + donutShop.avgDonutCust.toFixed(1)   + "</td>" +
                        "<td>" + donutShop.operatingHours + "</td>" +
                        "<td>" + donutShop.custPerHour    + "</td>" +
                        "<td>" + donutShop.donutsPerDay().toFixed(0) + "</td>" +
                 "</tr>" ;
                 break;
                 
        case 'D':
     	  // (D) Use 'Address' class
          var id    = donutShop.getShopId() ; 
          var hours = donutShop.operatingHours ;
          rowData = "<form>" +
                    "<tr><td>" + donutShop.getAddress()   + "</td>" +
                        "<td>" + donutShop.minCust        + "</td>" +
                        "<td>" + donutShop.maxCust        + "</td>" +
                        "<td>" + donutShop.avgDonutCust.toFixed(1)   + "</td>" +
                        "<td><input type='text' size=2 min='1' max='24' " +
                                  " value='" + hours + "' " +
                                  " name='hours" + id + "' " +
                                  " onchange='changeHours( this.value, '" + id + "' )'" +
                                 "'></td>" +
                        "<td>" + donutShop.custPerHour    + "</td>" +
                        "<td>" + donutShop.donutsPerDay().toFixed(0) + "</td>" +
                    "</tr>" +
                    "</form>" ;
                break;
                 
        case 'E':
          // (E) Use 'Address' class
            var id    = donutShop.getShopId() ; 
            var hours = donutShop.operatingHours ;
            rowData = "<form>" +
                    "<tr><td>" + donutShop.getAddress()   + "</td>" +
                        "<td>SHOP-0" + id                 + "</td>" +           // Added 'shopId'
                        "<td>" + donutShop.minCust        + "</td>" +
                        "<td>" + donutShop.maxCust        + "</td>" +
                        "<td>" + donutShop.avgDonutCust.toFixed(1)   + "</td>" +
                        "<td><input type='text' size=2 min='1' max='24' " +
                                  " value='" + hours + "' " +
                                  " name='hours" + id + "' " +
                                  " onchange='changeHours( this.value, " + id + " )'" +
                                 "'></td>" +
                        "<td>" + donutShop.custPerHour    + "</td>" +
                        "<td>" + donutShop.donutsPerDay().toFixed(0) + "</td>" +
                    "</tr>" +
                    "</form>" ;
                break;
                
        case 'F':
        // (F) Use to format data for the 'DataTable' jQuery Plug-in
            var id    = donutShop.getShopId() ; 
            var hours = donutShop.operatingHours ;
            rowData = "" +
                    "<tr><td>" + donutShop.getAddress()   + "</td>" +
                        "<td>SHOP-0" + id                 + "</td>" +           // Added 'shopId'
                        "<td>" + donutShop.minCust        + "</td>" +
                        "<td>" + donutShop.maxCust        + "</td>" +
                        "<td>" + donutShop.avgDonutCust.toFixed(1)   + "</td>" +
                        "<td><input type='text' size=2 min='1' max='24' " +
                                  " value='" + hours + "' " +
                                  " name='hours" + id + "' " +
                                  " onchange='changeHours( this.value, " + id + " )'" +
                                 "'></td>" +
                        "<td>" + donutShop.custPerHour    + "</td>" +
                        "<td>" + donutShop.donutsPerDay().toFixed(0) + "</td>" +
                    "</tr>" +
                    "" ;
                break;
        
        case 'G':
        // (G)  Use to format data for the jQuerySamples.html table display
            var id    = donutShop.getShopId() ; 
            var hours = donutShop.operatingHours ;
            rowData = "" +
                    "<tr><td>" + donutShop.getAddress()   + "</td>" +
                        "<td>SHOP-0" + id                 + "</td>" +           // Added 'shopId'
                        "<td>" + donutShop.minCust        + "</td>" +
                        "<td>" + donutShop.maxCust        + "</td>" +
                        "<td>" + donutShop.avgDonutCust.toFixed(1)   + "</td>" +
                        "<td><input type='text' size=2 min='1' max='24' " +
                                  " value='" + hours + "' " +
                                  " name='hours" + id + "' " +
                                  " onchange='changeHours( this.value, " + id + " )'" +
                                 "'></td>" +
                        "<td>" + donutShop.custPerHour    + "</td>" +
                        "<td>" + donutShop.donutsPerDay().toFixed(0) + "</td>" +
//                        "<td>" + "</td>" +
                        "<td width='200'>" + "<input type='image' src='icons/Pencil_24px.png' " +
                                  " onclick='editDonutShop(" + id + ")'" +
                                 "'>" +
                                 "<input type='image' src='icons/Remove_24px.png' " +
                                  " onclick='removeDonutShop(" + id + ")'" +
                                 "'>" +
                        "</td>" +
                    "</tr>" +
                    "" ;
                break;
                
        default:
        	rowData = "<tr><td>Not sure which table you would like to display?</td></tr>";
        	break;
    };
         
     return rowData;
  };
};
