$('.accordion__tab--row').on('click', '.accordion__tab--link', event => {
  $('.accordion__tab--link').removeClass('active');
  $('.accordion__tab--link').parent().removeClass('accordion__tab--selected');
  $('.accordion__tab--container').removeClass('show');
  $(event.target).addClass('active');
  $(event.target.parentElement).addClass('accordion__tab--selected');
  $($(event.target).attr('href')).addClass('show');
});