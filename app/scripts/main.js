//Variables
var good_guy,
    bad_dude;

//Selecting Fighters
$('.modal-pick').on('click', function (event) {
  event.preventDefault();

  $('.btn, .modal').hide();
});

// Players being picked - GOODY GUYS
$('.player_picked1').on('click', function (event) {
  event.preventDefault();
  $('.good_large1, .par_large1').fadeIn();
  // $('.player_picked1').fadeTo(200,0.5);
  $('.ninja_gif, .gif_desc1').fadeIn();

});

$('.player_picked2').on('click', function (event) {
  event.preventDefault();
  $('.good_large2, .par_large2').fadeIn();
  $('.karate_gif, .gif_desc2').fadeIn();

});

$('.player_picked3').on('click', function (event) {
  event.preventDefault();
  $('.good_large3, .par_large3').fadeIn();
  $('.surf_gif, .gif_desc3').fadeIn();

});

// Players being picked - BADDIE GUYS
$('.player_picked4').on('click', function (event) {
  event.preventDefault();
  $('.bad_large1, .par_bad1').fadeIn();
  $('.hulk_gif, .gif_desc4').fadeIn();

});

$('.player_picked5').on('click', function (event) {
  event.preventDefault();
  $('.bad_large2, .par_bad2').fadeIn();
  $('.cobra_gif, .gif_desc5').fadeIn();

});

$('.player_picked6').on('click', function (event) {
  event.preventDefault();
  $('.bad_large3, .par_bad3').fadeIn();
  $('.leslie_gif, .gif_desc6').fadeIn();

});


//Good Guy / Bad Guy setup =================

var Baddude = function (name) {
  this.name = name;
  this.health = 100;
  this.attack = function (hurt) {
    return hurt.health = hurt.health - _.random(1, 15);
  };
  this.special = function (hurt) {
    return hurt.health = hurt.health - _.random(15, 30);
  };
};

var Goodguy = function (options) {
  var special_pt, attack_pt;
  options = options || {};
  this.name = options.name;
  this.health = 100;
  this.attack = function (hurt) {
    return hurt.health = hurt.health - _.random(1, 15);
  };
  this.special = function (hurt) {
    return hurt.health = hurt.health - _.random(15, 30);
  };
};


good_guy = new Goodguy({
    name: $(this).text(),
    type: $(this).attr('name')
  });

bad_dude = new Baddude({
    name: $(this).text(),
  });

//Update variable to be on top of page and add switch statement to include above variables.
    //   $('.goody').prepend(good_guy.name).find('.clickgood').text(good_guy.health);
    // $('.baddie').prepend(bad_dude.name).find('.clickbad').text(bad_dude.health);


$('.choppin').on('click', function (event) {
  event.preventDefault();

  good_guy.attack(bad_dude);
  $('.clickbad').text(bad_dude.health);

  bad_dude.attack(good_guy);
  $('.clickgood').text(good_guy.health);


  if(good_guy.health > 0) {
      $('.clickgood').text(good_guy.health);
    } else {
      $('.clickgood').text('You Be Dead!');
      // $('.bgName').css('text-decoration', 'line-through').css('color', 'red');
      $('.choppin').hide();
    };

  if(bad_dude.health > 0) {
        $('.clickbad').text(bad_dude.health);
    } else {
      $('.clickbad').text('You Be Dead!');
      // $('.bgName').css('text-decoration', 'line-through').css('color', 'red');
      $('.choppin').hide();
    };
});

//Shake effect for button & titles

$('.choppin').click( function () {
  $('.choppin').toggleClass('animated shake');
  $('.clickgood, .clickbad').toggleClass('animated shake');
});

// }());
