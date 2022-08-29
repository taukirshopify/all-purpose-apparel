/*---------------------------------------------
Template name:  taukir-quickstart || html template
Version:        1.0
Author:  MD Taukir CH
Author url:     https://github.com/rajibmehedihasan

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]
----------------------------------------------*/

(function ($) {


  $(document).ready(function () {
  $(function() {
    $('.custome-arrow').click( function() {
      $(this).addClass('active').siblings().removeClass('active');
    });
  });

});

  // full dop down-menu-Option 
  function greenSlider(){    
    // width geting 
    const width = $( window ).width();
    $('.submenu').css('width', width,"px");
    // menu.offset distance 
    var offsets = document.getElementById('rec').getBoundingClientRect();
    var top = offsets.left;
    $('.submenu').css('left', -top,"px");
    console.log(top);
    };

$(document).ready(function(){

    greenSlider();
});
$(window).on('resize', function(){
 
     greenSlider();
});
  

// mobile-menu 
$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
      theme: "minimal"
  });

  $('#dismiss, .overlay').on('click', function () {
      $('#sidebar').removeClass('active');
      $('.overlay').removeClass('active');
  });

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').addClass('active');
      $('.overlay').addClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});

$(document).ready(function(){
//  mobile menu-button-toggle 
$(".crote").click(function(){
  $(this).children('div').toggleClass("m-rotate");
});
});



  })(jQuery);
