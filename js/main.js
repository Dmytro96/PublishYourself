
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

  // vk, fb, twitter, graddle, maven

     $("#selectFinderGenre").multiselect({
      header: false,
      selectedList: 3,
      noneSelectedText: 'Выберите жанр'
     });


     $("#selectFinderLanguege").multiselect({
      header: false,
      selectedList: 3,
      noneSelectedText: 'Выберите язык'
     });

     $("#selectDescriptionGenre").multiselect({
       header: false,
       selectedList: 3,
       noneSelectedText: 'Укажите жанр произведения'
     });

     $("#selectDescriptionLanguege").multiselect({
      header: false,
      selectedList: 3,
      noneSelectedText: 'Укажите язык произведения'
     });

     $( "#annotationDescription" ).resizable({
    });



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

    // File uploader
  //   function readURL(input) {
  //      if (input.files && input.files[0]) {
  //          var reader = new FileReader();
   //
  //          reader.onload = function (e) {
  //              $('#addImage')
  //                  .attr('src', e.target.result)
  //                  .width(150)
  //                  .height(200);
  //          };
   //
  //          reader.readAsDataURL(input.files[0]);
  //      }
  //  }

    // $("#inputImage").change(function(e) {
    //
    //   for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
    //
    //       var file = e.originalEvent.srcElement.files[i];
    //
    //       var img = document.createElement("img");
    //       var reader = new FileReader();
    //       reader.onloadend = function() {
    //            img.src = reader.result;
    //       }
    //       reader.readAsDataURL(file);
    //       $("#inputImage").after(img);
    //   }
    // });


});
