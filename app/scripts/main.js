// $('.pick-player').click( function () {
//
//
//    var random_num = Math.floor(Math.random() * (max - min)) + min;
//    $('.clickgood .clickbad').val( random_num );
//
// });



// Function for players to battle
// (function () {

var Goodguy = function (options) {
  var options = options || {};
  this.name = options.name;
  this.health = options.health || 100;
  this.attack = options.attack;
};

var Badguy = function (options) {
  var options = options || {};
  this.name = options.name;
  this.health = options.health || 100;
  this.attack = options.attack;
};

Goodguy.prototype.attack = function (hurt) {
  hurt.health = health - Math.random() * 10 + 1);
}

Badguy.prototype.attack = function (hurt) {
  hurt.health = health - Math.random() * 10 + 1);
};


var good1 = new Goodguy ({
  name: "3 Ninjas",
});

var good2 = new Goodguy ({
  name: 'Daniel LaRusso'
});

var good3 = new Goodguy ({
  name: 'Surf Ninjas'
});

var bad1 = new Badguy ({
  name: "Dave Dragon",
});

var bad2 = new Badguy ({
  name: 'Cobra Kai'
});

var bad3 = new Badguy ({
  name: 'Colonel Chi'
});

// }());
