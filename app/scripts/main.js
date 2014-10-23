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
  this.health = options.health;
  this.attack = options.attack;
};

var Badguy = function (options) {
  var options = options || {};
  this.name = options.name;
  this.attack = options.attack;
  // this.health = function (hurt) {
  //   hurt.health =
  // }
};




var good1 = new Goodguy ({
  name: "tum tum",
  health: 100
});

// var good2 = new Goodguy ({
//   name: 'Tum Tum'
// });
//
// var good3 = new Goodguy ({
//   name: 'Bob'
// });

var bad1 = new Badguy ({
  name: "hogan",
  health: 100
});

// var bad2 = new Badguy ({
//   name: 'mean'
// });
//
// var bad3 = new Badguy ({
//   name: 'meany'
// });

// }());
