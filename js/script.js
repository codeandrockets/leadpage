$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});

$(window).load(function(){
$('img.bgfade').hide();
function anim() {
    $("#wrap img.bgfade").first().appendTo('#wrap').fadeOut(1500);
    $("#wrap img").first().fadeIn(1500);
    setTimeout(anim, 3000);
}
anim();})
$(window).resize(function(){window.location.href=window.location.href});


var terms = ["Xplore", "Discover", "Find", "Tresure"];

function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
              .delay(2800).fadeOut(200, rotateTerm);
}
$(rotateTerm);