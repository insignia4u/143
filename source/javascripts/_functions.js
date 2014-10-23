 $(document).ready(function(){

  $('.img-holder').imageScroll({
    mediaWidth: 1200,
    mediaHeight: 800,
    coverRatio: 0.4,
    container: $('.parallax-image')
  });

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll > 745){
      $("#session-header").addClass("active");
    }else{
      $("#session-header").removeClass("active");
    }
  });

})
