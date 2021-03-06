/* Style Switcher */

window.console = window.console || (function($){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();

$(document).ready(function($){ 
				   
var styleswitcherstr = ' \
	<h2>Color Changer <a href="#"></a></h2> \
    <div class="content"> \
    <div class="switcher-box"> \
		<h2>Color is uncofortable.. ? dont worry change it</h3> \
		<a id="default" class="styleswitch color"></a> \
		<a id="Strongcyan" class="styleswitch color"></a> \
		<a id="DarkCyan" class="styleswitch color"></a> \
		<a id="blue" class="styleswitch color"></a> \
		<a id="orange" class="styleswitch color"></a> \
		<a id="purple" class="styleswitch color"></a> \
		<a id="Softred" class="styleswitch color"></a> \
    </div><!-- End switcher-box --> \
    </div><!-- End content --> \
	';
	
$(".switcher").prepend( styleswitcherstr );

});

/* boxed & wide syle */

/* Skins Style */
$(document).ready(function($){

    var cookieName = 'default';

    function changeLayout(layout) {
    $.cookie(cookieName, layout);
    $('head link[data-name=skins]').attr('href', 'css/skins/' + layout + '.css');
    }

    if( $.cookie(cookieName)) {
    changeLayout($.cookie(cookieName));
    }

    $("#default").click( function(){ $
    changeLayout('default');
    });

    $("#Strongcyan").click( function(){ $
    changeLayout('Strongcyan');
    });
    $("#DarkCyan").click( function(){ $
    changeLayout('DarkCyan');
    });
    $("#asphalt").click( function(){ $
    changeLayout('asphalt');
    });
    $("#blue").click( function(){ $
    changeLayout('blue');
    });
    $("#orange").click( function(){ $
    changeLayout('orange');
    });
    $("#clouds").click( function(){ $
    changeLayout('clouds');
    });
    $("#Softred").click( function(){ $
    changeLayout('Softred');
    });
    $("#purple").click( function(){ $
    changeLayout('purple');
    });
    $("#orange").click( function(){ $
    changeLayout('orange');
    });

});


/* Reset Switcher */
$(document).ready(function(){ 

    // Style Switcher
    $('.switcher').animate({
        left: '-255px'
    });

    $('.switcher h2 a').click(function(e){
        e.preventDefault();
        var div = $('.switcher');
        console.log(div.css('left'));
        if (div.css('left') === '-255px') {
            $('.switcher').animate({
              left: '0px'
            });
        } else {
            $('.switcher').animate({
              left: '-255px'
            });
        }
    })
});

