// $('.pick-player').click( function () {
//
//
//    var random_num = Math.floor(Math.random() * (max - min)) + min;
//    $('.clickgood .clickbad').val( random_num );
//
// });

$('.player_picked1').click( function() {
  $('.player_large').show();
});



// $(.modal-pick).on('click', function () {
//
//
// });



// Function for players to battle
// (function () {

var Goodguy = function (options) {
  var options = options || {};
  this.name = options.name;
  this.health = 100;
  this.attack = function (hurt) {
    hurt.health = hurt.health - _.random(0,10);
  };
};

var Badguy = function (options) {
  var options = options || {};
  this.name = options.name;
  this.health = 100;
  this.attack = function (hurt) {
    hurt.health = hurt.health - _.random(0,10);
  };
};


var good1 = new Goodguy ({
  name: "3 Ninjas",
});

var good2 = new Goodguy ({
  name: 'D. LaRusso'
});

var good3 = new Goodguy ({
  name: 'Surf Ninjas'
});

var bad1 = new Badguy ({
  name: "D. Dragon",
});

var bad2 = new Badguy ({
  name: 'Cobra Kai'
});

var bad3 = new Badguy ({
  name: 'Colonel Chi'
});

// }());
