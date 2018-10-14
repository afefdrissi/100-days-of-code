
$(document).ready(function(){
    $(".slid-button").click(function(){
      var currentSlider= $(this).closest('.slider');
      $(currentSlider).find('.slid-button').removeClass("current-slid-button");
      $(currentSlider).find('.slid').removeClass("current-slid");
      var slider=$(this).data( "sliderid" );
      $("#"+slider).addClass("current-slid");
      $(this).addClass("current-slid-button");

    });

});