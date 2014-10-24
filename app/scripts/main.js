// Players being picked

$('.player_picked1').one('click', function (event) {
  event.preventDefault();
  $('.good_large1').fadeIn();
  $('.player_picked1').fadeTo(200,0.5);

});

$('.player_picked2').one('click', function (event) {
  event.preventDefault();
  $('.good_large2').fadeIn();
  $('.player_picked2').fadeTo(200,0.5);

});

$('.player_picked3').one('click', function (event) {
  event.preventDefault();
  $('.good_large3').fadeIn();
  $('.player_picked3').fadeTo(200,0.5);

});



var Baddude = function (name) {
  this.name = name;
  this.health = 100;
  this.attack = function (hurt) {
    return hurt.health = hurt.health - _.random(1, 10);
  };
  this.special = function (hurt) {
    return hurt.health = hurt.health - _.random(10, 30);
  };
};

var Goodguy = function (options) {
  var special_pt, attack_pt;
  options = options || {};
  this.name = options.name;
  this.type = options.type;
  switch (this.type) {
    case "player_picked1":
      attack_pt = 10;
      special_pt = 20;
    break;
    case "player_picked2":
      attack_pt = 15;
      special_pt = 25;
    break;
    case "player_picked3":
      attack_pt = 5;
      special_pt = 30;
    break;
  }
  this.health = 100;
  this. attack = function (hurt) {
    return hurt.health = hurt.health - attack_pt;
  };
  this.special = function (attackee) {
    return hurt.health = hurt.health - special_pt;
  };
};


var good_guy = new Goodguy({
    name: $(this).text(),
    type: $(this).attr('name')
  });

var bad_dude = new Baddude({
    name: $(this).text(),
    type: $(this).attr('name')
  });

      $('.goody').prepend(good_guy.name).find('.clickgood').text(good_guy.health);
    $('.bady').prepend(bad_dude.name).find('.clickbad').text(bad_dude.health);


$('.choppin').on('click', function (event) {
  event.preventDefault();

  good_guy.attack(bad_dude);
  $('.clickbad').text(bad_dude.health);

  bad_dude.attack(good_guy);
  $('.clickgood').text(good_guy.health);

});

// }());
