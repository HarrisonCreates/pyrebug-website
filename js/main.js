let scroll_speed = 1200;
let blur_cont = document.querySelector('.main_wrapper');

let game_section = document.querySelector('.games_section');

let person_info = {'Josh': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Alex': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Chris': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Devin': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Austin': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Malcolm': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}

let modal = document.querySelector('.info_modal');
let modal_close = document.querySelector('.close_modal');
let home_easy_nav =   document.querySelector('.home_easy_nav'),
about_easy_nav = document.querySelector('.about_easy_nav'),
team_easy_nav = document.querySelector('.team_easy_nav'),
discord_easy_nav = document.querySelector('.discord_easy_nav'),
games_easy_nav = document.querySelector('.games_easy_nav');

window.addEventListener('resize', function(e){
  let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  check_class(w);
});

function check_class(w){
  // Set the class of the games_section depending on viewport
  if(w > 600){
    // Set to tablet-desktop
    class_change = document.querySelector('.games_section > div:first-child');
    class_change.className = 'tablet-desktop';
  } else {
    // Set to mobile
    class_change = document.querySelector('.games_section > div:first-child');
    class_change.className = 'mobile';
  }
}

$(".about_btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".card_two").offset().top
    }, scroll_speed);
});
$(".team_btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".card_four").offset().top
    }, scroll_speed);
});
$(".discord_btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".card_six").offset().top
    }, scroll_speed);
});
$(".games_btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".card_seven").offset().top
    }, scroll_speed);
});

home_easy_nav.addEventListener('click', function(e){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".card_one").offset().top
    }, scroll_speed);
});
about_easy_nav.addEventListener('click', function(e){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".card_two").offset().top
    }, scroll_speed);
});
team_easy_nav.addEventListener('click', function(e){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".card_four").offset().top
    }, scroll_speed);
});
discord_easy_nav.addEventListener('click', function(e){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".card_six").offset().top
    }, scroll_speed);
});
games_easy_nav.addEventListener('click', function(e){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".card_seven").offset().top
    }, scroll_speed);
});

function open_modal(name){
  blur_body();
  let doc = document.documentElement;
  let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  modal.style.top = top + modal.offsetHeight + 'px';
  modal.style.opacity = 1;
  set_modal_info(name);
}

function set_modal_info(person_name){
  document.querySelector('.info_modal > .right_col > .top_bar > h1').innerHTML = person_name;
  document.querySelector('.info_modal > .right_col > .person_info').innerHTML = person_info[person_name];
}

modal_close.addEventListener('click', function(e){
  close_modal();
});

function close_modal(){
  modal.style.top = "-50%";
  modal.style.opacity = 0;
  unblur_body();
}

function blur_body(){
   blur_cont.style.filter = "blur(3px)";
}

function unblur_body(){
   blur_cont.style.filter = "blur(0px)";
}
