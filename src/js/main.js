console.log('%cHey there! Good lookin\'! Welcome to Ananya\'s website 😊', 'color: #003F91; background-color: pink; font-size: 16px; padding: 10px;');


var  sectionHeading = document.getElementById("section-heading");
var  project = document.getElementById("project");
var  projectDesc = document.getElementById("project-desc");
var  projectMedia = document.getElementById("project-media");


  var cursor = $(".cursor"),
      follower = $(".cursor-follower");

  var posX = 0,
      posY = 0;

  var mouseX = 0,
      mouseY = 0;

  TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      TweenMax.set(follower, {
          css: {
          left: posX - 12,
          top: posY - 12
          }
      });

      TweenMax.set(cursor, {
          css: {
          left: mouseX,
          top: mouseY
          }
      });
    }
  });

  $(document).on("mousemove", function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
  });

  $(".link").on("mouseenter", function(e) {
      cursor.addClass("active");
      follower.addClass("active");
  });
  $(".link").on("mouseleave", function() {
      cursor.removeClass("active");
      follower.removeClass("active");
  });

 var tl = new TimelineMax();

 var projectName = {
   A : {
     name: 'Enchanting Travels',
     bg: 'orange'
   },
   B : {
     name: 'WoW Club',
     bg: 'hotpink'
   },
   C : {
     name: 'BiblioApp',
     bg: '#5E00E7'
   }
 };


 $(document).ready(function() {

  $('body').addClass('loaded');

  $(document).ajaxStart(function() { Pace.restart(); });

 $(".project-slide").on( "click", function() {
     var url = $(this).attr('data-url');
     var projID = $(this).attr('data-id');
     var proj, projBg;
     // var workID = $(this).attr('id');
     // $(this).find('.progress-bar').fadeTo( "slow", 1 ).delay(100).find('.progress').startBar();
     $('.homepage').addClass('disable-scroll');
     $('body').removeClass('page-link-active');
     // TweenMax.to(".project-slide__image", 1, {width:"0", backgroundColor:"#FF0000", ease:Power2.easeOut});
     // TweenMax.to("nav", 2, {top:"-100px", ease:Power2.easeOut});
     // TweenMax.to(".swiper-pagination", 2, {right:"-1000px", ease:Power2.easeOut});
		 // $('nav').remove().delay(100);
		 $('.screen-swipe').addClass('active');
     switch (projID) {
       case "A":
         proj = projectName.A.name;
         projBg = projectName.A.bg;
         break;
       case "B":
         proj = projectName.B.name;
         projBg = projectName.B.bg;
         break;
       case "C":
         proj = projectName.C.name;
         projBg = projectName.C.bg;
         break;
       case "D":
         proj = projectName.D.name;
         projBg = projectName.D.bg;
         break;
     }
     console.log(proj);
     console.log(projBg);

     // $('.screen-swipe').css("background-color",projBg);

     setTimeout(function () {
       $('.screen-swipe h1').html(proj);
       $('.screen-swipe').css("background-color",projBg);

     },1000);


     $("html, body").animate({ scrollTop: $(this).offset().top }, 1000, function() {
         document.ontouchmove = function(e){ e.preventDefault(); };

         $('#loadpage-content').load(url, function() {
           // $('#'+workID+' .progress').doneBar();
               setTimeout(function() {
                 $('#loadpage').show(function() {
                   // $('#'+workID+' .progress').resetBar();
                   $('#loadpage-content').addClass('active');
                   $('.back').addClass('active');
                   // tween = TweenMax.to(sectionHeading, 2, {x:"0.2%", ease:Linear.easeNone});
                   document.ontouchmove = function(e){ return true; };
                   // window.history.pushState({path:url},'',url);
                 });
               }, 100);
         });
       });
     });

   $("#back").on( "click", function() {
     var url="index.html"
      $("#loadpage").animate({ scrollTop: 0 }, 1000, function() {
        document.ontouchmove = function(e){ e.preventDefault(); };
        $('.back').removeClass('active');
        $('#loadpage #loadpage-content').removeClass('active');
        setTimeout(function() {
           $('#loadpage').hide();
           $('#loadpage #project-container').remove();
           setTimeout(function() {
             $('.screen-swipe h1').html('');
             $('.screen-swipe').removeClass('active');
             $('.screen-swipe').css("background-color",'#003F91');
               $('.homepage').removeClass('disable-scroll');
                 document.ontouchmove = function(e){ return true; };
                 // window.history.pushState({path:url},'',url);
          }, 100);
        }, 1500);
      });
   });

   $(".single-project-nav").on( "click", function() {
       var url = $(this).attr('data-url');
       var projID = $(this).attr('data-id');
       var proj;
       $("#loadpage").addClass('nextproj');
       // $(this).find('.progress-bar').fadeTo( "slow", 1 ).delay(100).find('.progress').startBar();
       // $('.homepage').addClass('disable-scroll');
      // $('.screen-swipe').addClass('active');
      // $(this).addClass('active');
      switch (projID) {
        case "A":
          proj = projectName.A.name;
          projBg = projectName.A.bg;
          break;
        case "B":
          proj = projectName.B.name;
          projBg = projectName.B.bg;
          break;
        case "C":
          proj = projectName.C.name;
          projBg = projectName.C.bg;
          break;
        case "D":
          proj = projectName.D.name;
          projBg = projectName.D.bg;
          break;
      }

      $('.screen-swipe h1').html(proj);
      setTimeout(function () {
        $('.screen-swipe').css("background-color",projBg);
      },2000);

      // $('.screen-swipe').addClass('active');

       $("#loadpage.nextproj").animate({ scrollTop: 0 }, 1000, function() {
           document.ontouchmove = function(e){ e.preventDefault(); };

           $('#loadpage-content').load(url, function() {
             // $('#'+workID+' .progress').doneBar();
                 setTimeout(function() {
                   $('#loadpage').show(function() {
                     // $('#'+workID+' .progress').resetBar();
                     $('#loadpage-content').addClass('active');
                     $('.back').addClass('active');
                     // tween = TweenMax.to(sectionHeading, 2, {x:"0.2%", ease:Linear.easeNone});
                     document.ontouchmove = function(e){ return true; };
                     // window.history.pushState({path:url},'',url);
                   });
                 }, 100);
           });
         });
       });

       $(".page-link").on( "click", function() {
           var url = $(this).attr('data-url');
           $("#loadpage").addClass('link-page');
           $('.screen-swipe h1').html('');
          $('.screen-swipe').addClass('active');
          $('body').addClass('disable-scroll page-link-active');

           $("#loadpage").animate({ scrollTop: 0 }, 1000, function() {
               document.ontouchmove = function(e){ e.preventDefault(); };
               $('#loadpage-content').load(url, function() {
                 // $('#'+workID+' .progress').doneBar();
                     setTimeout(function() {
                       $('#loadpage').show(function() {
                         $('#loadpage-content').addClass('link-active');
                         document.ontouchmove = function(e){ return true; };
                         // window.history.pushState({path:url},'',url);
                       });
                     }, 100);
               });
             });
           });


     $(".scroll-to-work").on('click', function(event) {
       if (this.hash !== "") {
         event.preventDefault();
         var hash = this.hash;
         $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 800, function(){
                 window.location.hash = hash;
         });
       }
     });
 });

 var tween;
 var controller = new ScrollMagic.Controller();


 $('.project-slide').each(function(){
    // Create a scene for each project
    var myScene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: "onEnter",
    offset: 200
    })
    .setClassToggle(this, 'fade-in')
    .addTo(controller);
   });
 // // build scenes
 $('.more-projects').each(function(){
    // Create a scene for each project
    var myScene1 = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: "onEnter",
    offset: 200
    })
    .setClassToggle(this, 'fade-in')
    .addTo(controller);
   });
