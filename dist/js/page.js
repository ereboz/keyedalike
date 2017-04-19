/**
 * Created by javaBoxer on 3/23/2017.
 */

// affixes top nav to be sticky
$('#topnavbar').affix({
  offset: {
    top: $('#banner').height()
  }
});

// Assuming backend is writing the sale price strike through, we can toggle sale sticker in upper left of product.
// iterate over each product-wrapper and search for value of retail-price.
// if not empty, then it's on sale. Toggle Less class to display sale sticker in upper left of parent wrapper

$(document).ready(function(){

    $('.product-wrapper').each(function () {
        var retailValue = $(this).find('.retail-price');
        var retailValueText = $(retailValue).text();

        if(retailValueText) {
            $(this).find('.product-sale').addClass("sale-on");
        }

        else {
            $(this).find('.product-sale').addClass("sale-off");
        }
  })

});

// **** On product make hover, ajax the short description for this page into a
// overlay div ****

// var x = $(".details-7ka").position();
// console.log("Top: " + x.top + " Left: " + x.left);

$.get("7ka.html", function (data) {
	var elem = $(data).find('.ka-product div:eq(0)');
	$(".details-7ka").hover(function(){
		var overlay = $('.overlay');
		overlay.html(elem);
		overlay.show();
		overlay.css({
			"position": "absolute",
			"border": "1px dashed black",
			// "top": x.top + -100 + "px",
			// "left": x.left + 200 + "px",
			"width": "300px",
			"height": "240px",
			"margin-left": "-200px;",
			"margin-top": "-200px;",
			"z-index": "1",
			"background-color": "white",
			"overflow": "hidden",
			// "opacity": "0.8"
		});

	}, function(){
		// $('.product-wrapper-overlay').html('');
		$('.overlay').hide();
	});
});

// ****** tooltiptext ******

// var x = $(".tooltiptext").position();
// console.log("Top: " + x.top + " Left: " + x.left);

// $.get("7ka.html", function (data) {
// 	var elem = $(data).find('.ka-product div:eq(0)');
// 	$(".details-7ka").hover(function(){
// 		var overlay = $('.overlay');
// 		overlay.html(elem);
// 		overlay.show();
// 		overlay.css({
// 			"position": "absolute",
// 			"border": "1px dashed black",
// 			"top": x.top + -100 + "px",
// 			"left": x.left + 200 + "px",
// 			"width": "300px",
// 			"height": "240px",
// 			"margin-left": "-200px;",
// 			"margin-top": "-200px;",
// 			"z-index": "1",
// 			"background-color": "white",
// 			"overflow": "hidden",
// 			// "opacity": "0.8"
// 		});
//
// 	}, function(){
// 		// $('.product-wrapper-overlay').html('');
// 		$('.overlay').hide();
// 	});
// });


// ****** tooltiptext ******

