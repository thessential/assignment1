
var Address = function() {

    this.name     = "" ;
    this.street   = "" ;
    this.city     = "" ;
    this.state    = "" ;
    this.zipCode  = "" ;

    this.setName  = function( name ) {
	this.name = name;
    };
 
    this.getName  = function() {
	return this.name;
    };
    
    this.setStreet = function( street ) {
        this.street = street;
    };
    
    this.getStreet = function() {
        return this.street;
    };
    
    this.setCity = function( city ) {
        this.city = city;
    };
    
    this.getCity = function() {
        return this.city;
    };
    
    this.setState = function( state ) {
        this.state = state;
    };
    
    this.getState = function() {
        return this.state;
    };
    
    this.setZipCode = function( zipCode ) {
        this.zipCode = zipCode;
    };
    
    this.getZipCode = function() {
        return this.zipCode;
    }
};
