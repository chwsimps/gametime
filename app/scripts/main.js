// $('.pick-player').click( function () {
//
//
//    var random_num = Math.floor(Math.random() * (max - min)) + min;
//    $('.clickgood .clickbad').val( random_num );
//
// });



// Function for players to battle
(function () {

var Goodguy = function (options) {
  var options = options || {};
  this.name = options.name;
  this.maxhealth = options.maxhealth;
  this.attack = options.attack;

};

var Badguy = function (options) {
  var options = options || {};
  this.name = options.name;
  this.health = options.health;
  this.maxhealth = function (hurt) {
    hurt.status =
  }
};




var good1 = new Goodguy ({
  name: 'Daniel',
  maxhealth: 100
});

// var good2 = new Goodguy ({
//   name: 'Tum Tum'
// });
//
// var good3 = new Goodguy ({
//   name: 'Bob'
// });

var bad1 = new Badguy ({
  name: 'evil',
  maxhealth: 100
});

// var bad2 = new Badguy ({
//   name: 'mean'
// });
//
// var bad3 = new Badguy ({
//   name: 'meany'
// });

}());
