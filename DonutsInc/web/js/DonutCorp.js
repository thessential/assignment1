/*
 * @Object( DonutCorp )
 */
var DonutCorp = function() {

    this.shopId     = 0;
    this.address    = new Address();
    this.shopList   = [] ;          // Future: Create a Shops class to keep track of all of the 'Shop' objects.  
    this.employees  = [] ;          // Future: Create a Employees class to keep track of all of the 'Employee' objects.
    
    /*
     * The difference between the addEmployee(), updateEmployee() and deleteEmployee()
     * methods in this class, DonutCorp(), and the three methods by the same name in the
     * 'Employee' class are.... we are adding, updating or deleting an 'Employee'
     * object from the 'employees' array.
     * 
     * The creation and editing of an 'Employee' object should happen in the 
     * 'Employee' class.
     * 
     * @param Employee employee
     * @returns {undefined}
     */
    this.addEmployee = function( employee ) {
        this.employees.push(employee);
    };
    
    this.updateEmployee = function( employee ) {
        
    };
    
    this.deleteEmployee = function( employee ) {
        
    };
    
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
                return true;
            };
        };
        // this.shopList.push( donutShop );
    };
    
    /*
     * Code sample from 'Javascript | MDN',  Array
     * var fruits      = ["Strawberry", "Banana", "Mango"];
     * var pos         = fruits.indexOf("Banana");
     * var removedItem = fruits.splice(pos, 1); // this is how to remove an item
     * ["Strawberry", "Mango"]
     */
    this.deleteShop = function( donutShop ) {
        var deleteShopId = donutShop.getShopId();
        
        for ( var index=0; i<this.shopList.length; index++ ) {
            var aShop = this.shopList[index];
            if ( aShop.getShopId() === updateShopId ) {
                this.shopList.splice( index, 1 );
                return true;
            };
        };
    };

    this.getShopCount = function() {
        var length    = this.shopList.length;
        return length;
    };
    
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
    };
    
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