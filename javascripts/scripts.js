var lilbox;
var next_left = 0;
var next_top = 0;

$(document).ready(function(){

	lilbox = $('#lilbox');

	$(document).on( "keydown", function(e){

		var key_code = e.keyCode;
		var move_step = 50;

		if (key_code <= 75 && key_code >= 49){

			function flash(){
				var bod = $('body');

				console.log(bod.css('backgroundColor'))
				if( bod.css('backgroundColor') == 'rgb(0, 0, 0)' )
				{
				  var red = Math.floor(Math.random() * 255)
				  var gre = Math.floor(Math.random() * 255)
				  var blu = Math.floor(Math.random() * 255)
				  bod.css({'backgroundColor': 'rgb('+ red +', '+ gre +', '+ blu +')'})
				}
				else
				{
   				  bod.css({'backgroundColor': 'rgb(0, 0, 0) '})
   				}
			}

			var flash_count = (key_code - 48) * 2;
			var delay_cnt = 100;

			for (var i = 1; i <= flash_count; i++) {
				console.log(i*delay_cnt)
				setTimeout(function(){flash()}, i*delay_cnt)
			};

		}

		switch (key_code) {
		  case 37:
		  	// console.log("Left!")
		    // lilbox.css({'left': (parseInt(lilbox.css('left')) - move_step) + 'px'})
		    next_left = next_left - move_step
		    break;
		  case 38:
		  	// console.log("Up!")
		  	// lilbox.css({'top': (parseInt(lilbox.css('top')) - move_step) + 'px'})
		  	next_top = next_top - move_step
		    break;
		  case 39:
		    // console.log("Right!")
		    // lilbox.css({'left': (parseInt(lilbox.css('left')) + move_step) + 'px'})
		    next_left = next_left + move_step
		    break;
		  case 40:
		    // console.log("Down!")
		    // lilbox.css({'top': (parseInt(lilbox.css('top')) + move_step) + 'px'})
		    next_top = next_top + move_step
		    break;
		  default:
		    return true
		    break;
		}
		lilbox.clearQueue()
		lilbox.animate({'left': next_left + 'px'}, 'fast')
		lilbox.animate({'top': next_top + 'px'}, 'fast')
		return false
	})

});


