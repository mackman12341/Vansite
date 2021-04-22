$(window).on("load resize scroll", function() { //van animation 
  $(".bg-static").each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop +600; //fuck this 
      $(this)
        .find(".bg-move")
        .css({ left: leftPosition });
  });
});

$('.js--nav-icon').click(function() { //toggle the menu items
        var nav = $('.js--main-nav');
        var icon = $('.nav-icon');
        nav.slideToggle(200);
        if(icon.hasClass('.nav-icon')) {
            icon.addClass('');
            icon.removeClass('.nav-icon');
        } else{
            icon.addClass('.nav-icon');
            icon.removeClass('');
        }      
        
    });

$(document).ready(function(){ //start the document with the menu items hidden
    var nav = $('.js--main-nav');
    nav.slideToggle(200);
    if(nav.hasClass('.js--main-nav')) {
        nav.removeClass('.js--main-nav');
        nav.addClass('');
    }
    
    
});

 $(function(){
        $('a[href*=#]:not([href=#])').click(function(){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html.body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });
    });

function galleryPage_change(){
  window.location.href = "gallery.html";
}
function HomePage_change(){
  window.location.href = "index.html";
}