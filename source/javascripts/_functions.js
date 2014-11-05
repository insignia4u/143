 $(document).ready(function(){

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll > 745){
      $("#session-header").addClass("active");
    }else{
      $("#session-header").removeClass("active");
    }
  });
})

var touch = Modernizr.touch;
$('.img-holder').imageScroll({
    imageAttribute: touch === true ? 'image-mobile' : 'image',
    touch: touch
});
