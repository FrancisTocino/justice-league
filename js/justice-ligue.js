
document.addEventListener("DOMContentLoaded", () => {

	console.log("DOM fully loaded and parsed");

    console.log(getViewportWidth() + "x" + getViewportHeight());
    
    scroll_wheel();

	$(function() {
        $('a').bind('click',function(event){
            var $anchor = $(this);
            /*
            if you want to use one of the easing effects:
            $('html, body').stop().animate({
                scrollLeft: $($anchor.attr('href')).offset().left
            }, 1500,'easeInOutExpo');
                */
            $('html, body').stop().animate({
                scrollLeft: $($anchor.attr('href')).offset().left
            }, 1000);
            event.preventDefault();
        });
    });



}, false);  /*   PRINCIPAL DOMContentLoaded    */





function scroll_wheel() {
  
   var lastScrollTop = 0;
   
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (e) {

        var scrollTo = 0;
        //e.preventDefault();
        if (e.type == 'mousewheel') {  // -Evento de mousewheel Utilizado por CHROME

                    var st = $(this).scrollLeft();
                    //console.log("antes de entrar en el if :" + st);

                    if (e.originalEvent.wheelDelta > 0) {
                        // UP OR LEFT //
                        console.log ('arriba-left' + st);
                        st = st - 150;
                        $(this).scrollLeft(st)

                    }
                    else {
                        // DOWN OR RIGHT //
                        //console.log("e.originalEvent.wheelDelta :" + e.originalEvent.wheelDelta);
                        st = st + 150;
                        console.log ('abajo-right st:' + st);
                        $(window).scrollLeft(st)

                    }
                    $(this).scrollLeft(scrollTo + $(this).scrollLeft());

        }  // FIN Evento de mousewheel


        else if (e.type == 'DOMMouseScroll') {  //  // -Evento de DOMMouseScroll UTILIZADO POR MOZILLA


                    var st = $(this).scrollLeft();
                    console.log("antes de entrar en el if :" + st);

                    if (e.originalEvent.detail > 0) {
                        // UP OR LEFT //
                        console.log('arriba-left' + st);
                        st = st + 150;
                        $(this).scrollLeft(st);

                    }
                    else {
                        // DOWN OR RIGHT //
                        console.log("e.originalEvent.detail :" + e.originalEvent.detail);
                        st = st - 150;
                        console.log('abajo-right st:' + st);
                        $(window).scrollLeft(st);

                    }

                }
                $(this).scrollLeft(scrollTo + $(this).scrollLeft());

    });



} /* Fin function   scroll_wheel  */
    
    

/* Hace un Console Log de los valores del viewport    */

function getViewportWidth(){

	if (window.innerWidth){
		return window.innerWidth;
	} else if (document.body && document.body.offsetWidth){
		return document.body.offsetWidth;
	} else{
		return 0;
	}
}



function getViewportHeight(){

	if (window.innerHeight){
		return window.innerHeight;
	} else if (document.body && document.body.offsetHeight){
		return document.body.offsetHeight;
	} else{
		return 0;
	}
}

  /*/* --------------------------------------------------------------------------- 
  Para Mostrar un div con informacion del ejes X e Y
      $(document).mousemove(function(event){ 
            $("#info").text("X: " + event.pageX + ", Y: " + event.pageY); 
      });

      $("#div-horizontal").scroll(function () {
            var scroll_pos = $(this).scrollTop();
            $("#info").html(scroll_pos);
            
      });

      $("#div-horizontal").click(function(){
            $("#info").animate({left: '+=250px'});
     });   
--------------------------------------------------------------------------------*/


function getinScreen () {
    var logoSuperman = document.getElementById("superman-logo-wrapper");
    var logoBatman   = document.getElementById("batman-logo-wrapper");
    var logoWonder   = document.getElementById("wonder-logo-wrapper");
    var logoAquaman  = document.getElementById("aquaman-logo-wrapper");
    var logoFlash    = document.getElementById("flash-logo-wrapper");
    var logoCyborg   = document.getElementById("cyborg-logo-wrapper");

    

    logoSuperman.addEventListener('show', logVisibilityInEvent);
    logoBatman.addEventListener('show', logVisibilityInEvent);
    logoWonder.addEventListener('show', logVisibilityInEvent);
    logoAquaman.addEventListener('show', logVisibilityInEvent);
    logoFlash.addEventListener('show', logVisibilityInEvent);
    logoCyborg.addEventListener('show', logVisibilityInEvent);

    logoSuperman.addEventListener('hide', logVisibilityInEvent);
    logoBatman.addEventListener('hide', logVisibilityInEvent);
    logoWonder.addEventListener('hide', logVisibilityInEvent);
    logoAquaman.addEventListener('hide', logVisibilityInEvent);
    logoFlash.addEventListener('hide', logVisibilityInEvent);
    logoCyborg.addEventListener('hide', logVisibilityInEvent);


    function logVisibilityInEvent(ev){
       // console.log("Event: %s for %s. Visibility state: %s", ev.type, ev.target.id, ev.detail.visible);
        let elemento = document.getElementById(ev.target.id);
        //console.log ('ELEMENETO = ' +elemento.id);
        if (ev.type === 'show') {
            //console.log('Le añado las clases ------ ---- a---- '+ elemento.id);
            elemento.classList.add('animate__animated','animate__flip');
        } else if (ev.type === 'hide'){
            //console.log ('Le quito las Clases');
            elemento.classList.remove('animate__animated','animate__flip');  
        }
    }
}