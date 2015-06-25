
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
 'federation standard': 'hello' // home planet is Earth
};

var SentientBeing = function(homePlanet,language){
    this.homePlanet=homePlanet;
    this.language=language;
}

SentientBeing.prototype.sayHello=function(sb){
    //console.log("2 " + sb.language);
    return sb.language;

}

var human = new SentientBeing('earth', 'federation standard');
var klingon = new SentientBeing('Qonos', 'nuqneH');
var	romulan = new SentientBeing('Romulus','Jolan');

/*console.log("3"+human.sayHello(klingon));
console.log("4"+klingon.homePlanet );
console.log("5"+klingon.language);*/

//console.log("human says " + human.sayHello(human)+ " human hears "+ human.sayHello(human));
console.log("human says " + human.sayHello(human)+ " klingon hears "+ klingon.sayHello(klingon));
console.log("human says " + human.sayHello(human)+ " romulan hears "+ romulan.sayHello(romulan));

console.log("klingon says " + klingon.sayHello(klingon)+ " romulan hears "+ romulan.sayHello(romulan));
console.log("klingon says " + klingon.sayHello(klingon)+ " human hears "+ human.sayHello(human));

console.log("romula says " + romulan.sayHello(romulan)+ " human hears "+ human.sayHello(human));
console.log("human says " + romulan.sayHello(romulan)+ " romulan hears "+ klingon.sayHello(klingon));

assert(human.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
