
var DonutCorp = function() {

    this.shopId   = 0;
    this.address  = new Address();
    this.shopList = [] ;      
    
    this.addShop  = function( donutShop ) {
	donutShop.setShopId( this.getNextShopId() );
        this.shopList.push( donutShop );
    };
    
    this.updateShop = function( donutShop ) {
        var updateShopId = donutShop.getShopId();
        
        for ( var i=0; i<this.shopList.length; i++ ) {
            var aShop = this.shopList[i];
            if ( aShop.getShopId() === updateShopId ) {
                this.shopList[i] = donutShop ;  
            };
        };
        // this.shopList.push( donutShop );
    };

    this.getShopCount = function() {
        var length    = this.shopList.length;
        return length;
    }
    
    this.getNextShopId = function() {
        this.shopId++;
        return this.shopId ;
    };
     
    this.getShopByIndex = function( index ) {
        var shop = this.shopList[index];
        return shop;
    };
    
    this.getShopById   = function( shopId ) {  
        var shop = new DonutShop(-1);
        for ( i=0; i<this.shopList.length; i++ ) {
            shop = this.shopList[i];
            if ( shop.getShopId() === shopId ) {
                alert( shop.getShopId() );
                alert( shopId );
                return shop;
            }
        }
    }
    
    this.processChange  = function( type, value, id ) {
        
        switch( type ) {
    	case 'HOURS':
            var hours = value;
         //   var shop = new DonutShop;
         //   var  shop = this.getShopById( id );
         //          shop.this.setHours( value );
            for ( var i=0; i<this.shopList.length; i++ ) {
                // get value from the object in the list.
                if ( this.shopList[i].getShopId() === id ) {
// function( shopId, location, minCust, maxCust, avgDonutCust, operatingHours ) 
                    var location = [ this.shopList[i].address.getName(),
                                     this.shopList[i].address.getStreet(),
                                     this.shopList[i].address.getCity(),
                                     this.shopList[i].address.getState(), 
                                     this.shopList[i].address.getZipCode()];
                    var shop = new DonutShop( id, 
                                              location,
                                              this.shopList[i].minCust,
                                              this.shopList[i].maxCust,
                                              this.shopList[i].avgDonutCust,
                                              hours );
                    this.updateShop( shop );
//                  this.updateShop( shop );
//                  this.shopList[i].setHours( value );
//                  this.shopList[i].donutsPerDay();
//                  return;
                }
            }
            break;
        default:
            break;
        }
    };

};