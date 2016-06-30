
$(document).ready(function() {

  var owl = $('.owl-carousel');
  owl.owlCarousel({
      loop:true,
      margin:10,
      items: 1,
      autoplay:true,
      autoplayTimeout: 2000,
      autoplaySpeed: 3000,
      navSpeed: 300,
      nav:true,
      navText: ["<i class='fa fa-angle-double-right my-icon-size' aria-hidden='true'></i>","<i class='fa fa-angle-double-left my-icon-size' aria-hidden='true'></i>"],
  });

  var owlTabGeneralPage = $('.tabsOlwCarousel1');
  owlTabGeneralPage.owlCarousel({
    loop:true,
    items: 3,
    nav:true,
    autoplay:false,
    navText: ["<i class='fa fa-angle-left my-icon-size positionLeftAngle' aria-hidden='true'></i>","<i class='fa fa-angle-right my-icon-size positionRightAngle' aria-hidden='true'></i>"],
  });


  var currentWidthOfCarousel = 0.8 * $(document).innerWidth();
  $(".slider").innerWidth(currentWidthOfCarousel);

  var currentWidthOfFinderPage = $(document).innerWidth() - 60;
  $(".container-fluid").innerWidth(currentWidthOfFinderPage);


  $(".bookAddeder img").html("src","")


  var multiSelector = function(selectFinder, stockText){
    $(selectFinder).multiselect({
      header: false,
      selectedList: 3,
      noneSelectedText: stockText
    })
  }

    multiSelector("#selectFinderGenre", "Выберите жанр");
    multiSelector("#selectFinderLanguege", "Выберите язык");
    multiSelector("#selectDescriptionGenre", "Укажите жанр произведения");
    multiSelector("#selectDescriptionLanguege", "Укажите язык произведения");

     $( "#annotationDescription" ).resizable();


  $("#tabGeneralPage").tabs();


  $(function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "₴" + ui.values[ 0 ] + " - ₴" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "₴" + $( "#slider-range" ).slider( "values", 0 ) +
        " - ₴" + $( "#slider-range" ).slider( "values", 1 ) );
    });



});
