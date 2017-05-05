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
    
    // Checkout Page - move the shopping cart section from the bottom of the page to the top
    // above "Account"
    
    var cartDetails = $(".checkout-details .cart-details");         // Remove Shopping Cart Div (cart-details)
    var checkoutAccount = $(".checkout-details .checkout-account"); // Insert Shopping Cart Div before Account Div (checkout-account)
    $(cartDetails).remove();
    $(cartDetails).insertBefore(checkoutAccount);
    
});

// *************** BILL TO/ SHIP TO ADDRESS FORM (from checkout page) ***************

// NEED TO MAKE THE ADD NEW SHIPPING, ADD NEW BILLING ADDRESS .container CLASS 50% WIDTH TO REDUCE THE SIZE AND CENTER IT ON SCREEN.
// IT DOES NOT HAVE A UNIQUE CLASS AND SETTING WIDTH ON .container AFFECTS EVERY PAGE ON THE SITE.
// READ IN THE URL AND APPLY STYLING ONLY TO THE ADDRESS PAGE (address/detail)
// APPLIES TO:
// http://a2zhardware.com/address/detail?makePrimary=True&addressType=Shipping&returnurl=%2Fcheckout
// http://a2zhardware.com/address/detail?makePrimary=True&addressType=Billing&returnurl=%2Fcheckout

$(window).load(function() {
    var loc = window.location.href.toLowerCase();
    var container = $(".container");
    
    if (loc.indexOf('/address/detail') > -1) {
        var viewportWidth = $(window).width();
        
        if (viewportWidth > 768) {
            $(container).removeClass("addressMobileWidth").addClass("addressDesktopWidth");
        }
    
        $(window).resize(function () {
            var container = $(".container");
            var viewportWidth = $(window).width();
            if (viewportWidth < 768) {
                $(container).removeClass("addressDesktopWidth").addClass("addressMobileWidth");
            }
            if (viewportWidth > 768) {
                $(container).removeClass("addressMobileWidth").addClass("addressDesktopWidth");
            }
        });
        
        
    }
    
    
});




// $(window).load(function() {
//     var container = $(".container");
//     var viewportWidth = $(window).width();
//     if (viewportWidth > 768) {
//         $(container).removeClass("addressMobileWidth").addClass("addressDesktopWidth");
//     }
// });
//
// $(window).resize(function () {
//     var container = $(".container");
//     var viewportWidth = $(window).width();
//     if (viewportWidth < 768) {
//         $(container).removeClass("addressDesktopWidth").addClass("addressMobileWidth");
//     }
// });
