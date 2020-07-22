$(document).ready(function () {
  $('.header__burger').click(function(){
    $('.header__menu').toggleClass('active');
    $('.header__burger').toggleClass('active');
    $('body').toggleClass('lock');
  });

  // стрелка вверх
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){ // если пользователь проскроллил от начала страницы больше чем на 100 px =>
      $('#arrow__up').fadeIn().toggleClass('active', true); //стрелке c id='arrow__up' присуждается класс active c opacity: 1,
    } else { // если нет, то =>
      $('#arrow__up').fadeOut().removeClass('active'); // у стрелки с id='arrow__up' класс 'active' удаляется.
    };
  })
  $('#arrow__up').click(function(){ // при клике на стрелку с id='arrow__up',
    $('html,body').animate({scrollTop: 0}, 600); // пользователя будет переводить в начало страницы со скоростью 600ms
  })

  // плавный скролл до якорей
  $("body").on('click', '[href*="#"]', function(e){ // при клике на элементы body содержащие в себе "href=#"  =>
    var fixed_offset = 100; 
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000); // пользователя переведет на указанный в href якорь со скоростью 1000ms и с отступом 100px сверху
    $('body').removeClass('lock');
    $('.header__menu').removeClass('active');
    e.preventDefault();
  });

  //модальное окно 
  $('.modal').hide();
  $('#btn').click(function(){
    $('.modal').fadeIn().toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('#cancel').click(function(){
    $('.modal').fadeOut().removeClass('active');
    $('body').toggleClass('lock');
  });
});
