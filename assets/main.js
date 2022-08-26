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

  // document.addEventListener( 'DOMContentLoaded', function () {
  // // top bannar insitalization 
  // new Splide( '#splide' , {
  //   type: 'loop',
  //   pagination : false,
  //   arrows     : false,
  //   drag   : 'free',
  //   focus  : 'center',
  //   gap         : 10,
  //   autoScroll: {
  //     speed: 2,
  //   },
  //   breakpoints : {
  //     '200': {
  //       perPage: 1,
  //     },
  //     '600': {
  //       perPage: 2,
  //     },
  //     '1020': {
  //       perPage: 2,
  //     },
  //     '1333': {
  //       perPage: 3,
  //     },
  //     '1500': {
  //       perPage: 4,
  //     },
  //     '1920': {
  //       perPage: 5,
  //     }
  // },
    
  // }).mount( window.splide.Extensions );

  // });



//  new Splide( '.splide', {
//    type: 'loop',
//     pagination : false,
//     arrows     : false,
//     drag   : 'free',
//     focus  : 'center',
//     gap         : 10,
//     autoScroll: {
//       speed: 2,
//     },
//     breakpoints : {
//       '200': {
//         perPage: 1,
//       },
//       '600': {
//         perPage: 2,
//       },
//       '1020': {
//         perPage: 2,
//       },
//       '1333': {
//         perPage: 3,
//       },
//       '1500': {
//         perPage: 4,
//       },
//       '1920': {
//         perPage: 5,
//       }
//   },
//   } ).mount(window.splide.Extensions);
// new Splide( '#slider1' ).mount(window.splide.Extensions);



  //  new Splide("#first-slider",{
  //   type: 'loop',
  //   pagination : false,
  //   drag   : 'free',
  //   cover      : true,
  //   gap       : 20,
  //   perMove:1,
  //   focus  : 'left',
  //   interval: 4000,
  //    autoScroll: {
  //     speed: 2,
  //   },
  //   breakpoints : {

  //     '600': {
  //       perPage: 1,
  //       autoScroll: {
  //         speed: 0,
  //       },
  //     },
  //     '960': {
  //       perPage: 2,
  //       autoScroll: {
  //         speed: 0,
  //       },
  //     },
  //     '1020': {
  //       perPage: 3,
  //       autoScroll: {
  //         speed: 0,
  //       },
  //     },
  //     '1333': {
  //       perPage: 4,
  //       autoScroll: {
  //         speed: 0.09,
  //       },
  //     },
  //     '1500': {
  //       perPage: 4,
  //       autoScroll: {
  //         speed: 0.09,
  //       },
  //     },
  //     '1920': {
  //       perPage: 5,
  //       autoScroll: {
  //         speed: 1.5,
  //       },
  //     }
  // },
  // }).mount(window.splide.Extensions);

  // new Splide("#first-slider1",{
  
  //   pagination : false,
  //   drag   : 'free',
  //   cover      : true,
  //   gap       : 20,
  //   snap :true,
  //   perMove :1,
  //   focus  : 'left',
  //   interval: 4000,
  //   autoScroll: {
  //     speed: 1,
  //   },
  //   breakpoints : {

  //     '200': {
  //       perPage: 1,
  //       autoScroll: {
  //         speed: 0,
  //       },
  //     },
  //     '600': {
  //       perPage: 1,
  //       autoScroll: {
  //         speed: 0,
  //       },
  //     },
  //     '960': {
  //       perPage: 2,
  //       autoScroll: {
  //         speed: 0,
  //       },
  //     },
  //     '1020': {
  //       perPage: 2,
  //       autoScroll: {
  //         speed: 0,
  //       },
  //     },
  //     '1333': {
  //       perPage: 3,
    
  //       autoScroll: {
  //         speed: 0.09,
  //       },
  //     },
  //     '1500': {
  //       perPage: 3,
  //       autoScroll: {
  //         speed: 0.09,
  //       },
  //     },
  //     '1920': {
  //       perPage: 3,
       
  //     }
  // },
  // }).mount(window.splide.Extensions);
  // new Splide("#first-slider2",{
  //   type: 'loop',
  //   pagination : false,
  //   drag   : 'free',
  //   cover      : true,
  //   gap       : 20,
  //   perMove:1,
  //   focus  : 'left',
  //   interval: 4000,
  //    autoScroll: {
  //     speed: 2,
  //   },
  //   breakpoints : {

  //     '600': {
  //       perPage: 1,
  //       autoScroll: {
  //         speed: 0,
  //       },
  //     },
  //     '960': {
  //       perPage: 2,
  //       autoScroll: {
  //         speed: 0,
  //       },
  //     },
  //     '1020': {
  //       perPage: 3,
  //       autoScroll: {
  //         speed: 0,
  //       },
  //     },
  //     '1333': {
  //       perPage: 4,
  //       autoScroll: {
  //         speed: 0.09,
  //       },
  //     },
  //     '1500': {
  //       perPage: 4,
  //       autoScroll: {
  //         speed: 0.09,
  //       },
  //     },
  //     '1920': {
  //       perPage: 5,
  //       autoScroll: {
  //         speed: 1.5,
  //       },
  //     }
  // },
  // }).mount(window.splide.Extensions);




  // new Splide(".second-slider").mount();



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
