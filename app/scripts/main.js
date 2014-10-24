// Players being picked - GOODY GUYS
$('.player_picked1').on('click', function (event) {
  event.preventDefault();
  $('.good_large1').fadeIn();
  $('.player_picked1').fadeTo(200,0.5);

});

$('.player_picked2').on('click', function (event) {
  event.preventDefault();
  $('.good_large2').fadeIn();
  $('.player_picked2').fadeTo(200,0.5);

});

$('.player_picked3').on('click', function (event) {
  event.preventDefault();
  $('.good_large3').fadeIn();
  $('.player_picked3').fadeTo(200,0.5);

});

// Players being picked - GOODY GUYS
$('.player_picked4').on('click', function (event) {
  event.preventDefault();
  $('.bad_large1').fadeIn();
  $('.player_picked4').fadeTo(200,0.5);

});

$('.player_picked5').on('click', function (event) {
  event.preventDefault();
  $('.bad_large2').fadeIn();
  $('.player_picked5').fadeTo(200,0.5);

});

$('.player_picked6').on('click', function (event) {
  event.preventDefault();
  $('.bad_large3').fadeIn();
  $('.player_picked6').fadeTo(200,0.5);

});


//Good Guy / Bad Guy setup =================

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
  // this.type = options.type;
  // switch (this.type) {
  //   case "1":
  //     attack_pt = _.random(0,5);
  //     special_pt = _.random(15,40);
  //   break;
  //   case "2":
  //     attack_pt = _.random(5,10);
  //     special_pt = _.random(10,15);
  //   break;
  //   case "3":
  //     attack_pt = _.random(0, 15);
  //     special_pt = _.random(15,20);
  //   break;
  // };
  this.health = 100;
  this.attack = function (hurt) {
    return hurt.health = hurt.health - _.random(1, 10);
  };
  this.special = function (hurt) {
    return hurt.health = hurt.health - _.random(10, 30);
  };
};


var good_guy = new Goodguy({
    name: $(this).text(),
    type: $(this).attr('name')
  });

var bad_dude = new Baddude({
    name: $(this).text(),
  });

      $('.goody').prepend(good_guy.name).find('.clickgood').text(good_guy.health);
    $('.baddie').prepend(bad_dude.name).find('.clickbad').text(bad_dude.health);


$('.choppin').on('click', function (event) {
  event.preventDefault();

  good_guy.attack(bad_dude);
  $('.clickbad').text(bad_dude.health);

  bad_dude.attack(good_guy);
  $('.clickgood').text(good_guy.health);


  if(good_guy.health >= 0) {
      $('.clickgood').text(good_guy.health);
    } else {
      $('.clickgood').text('You Be Dead');
      // $('.bgName').css('text-decoration', 'line-through').css('color', 'red');
      $('.choppin').hide();
    };

    if(bad_dude.health >= 0) {
        $('.clickbad').text(bad_dude.health);
      } else {
        $('.clickbad').text('You Be Dead');
        // $('.bgName').css('text-decoration', 'line-through').css('color', 'red');
        $('.choppin').hide();
      };

});

$('.choppin').click( function () {
  $('.choppin').toggleClass('animated shake');
});

// }());
