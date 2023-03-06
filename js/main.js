jQuery(document).ready(function($) {
  

  //slider
  if (jQuery('[data-main]').length > 0) {
    $('[data-main]').slick({
        dots: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        infinite: true,
        responsive: [{
          breakpoint: 994,
          settings: {
            dots: false
          }
        } ]
    });
}



  //adaptive
  if ($(window).width() < 994) {
   
  }
  
  if ($(window).width() < 768) {
    
  }
  if ($(window).width() > 993) {
    
  }
  if ($(window).width() > 768) {
    
  }



}

